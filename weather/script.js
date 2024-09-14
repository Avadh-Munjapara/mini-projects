let permissiontab=document.querySelector("[data-permissiontab]");
let yweathertab=document.querySelector("[data-yweathertab]");
let searchtab=document.querySelector("[data-searchtab]");
let loading=document.querySelector("[data-loading]");
let city_text=document.querySelector("[data-city]");
let country_flag=document.querySelector("[data-country]");
let windspeed=document.querySelector("[data-windspeed]");
let humidity=document.querySelector("[data-humidity]");
let clouds=document.querySelector("[data-clouds]");
let temp=document.querySelector("[data-temp]");
let desc=document.querySelector("[data-desc]");
let wimage=document.querySelector("[data-wimage]");
let search=document.querySelector("[data-search]");
let sweather=document.querySelector("[data-swweather]");
let swsearch=document.querySelector("[data-swseach]");
let apikey='02dc0eac1830db04da64d6ce795cdb63';
let currtab;
sweather.classList.add("bg-[#7A8EA8]");
if(!sessionStorage.getItem("letti")){
     currtab=permissiontab;
     set_tab(currtab);
}
else{
    currtab=yweathertab;
    set_values();
}
if(sessionStorage.getItem("letti")){
    sweather.addEventListener("click",set_values);
}
else{
    sweather.addEventListener("click",set_tab(permissiontab));
}
let cords;
function unset_tab(tab){
    tab.style.display="none";
}
function set_tab(tab){
    tab.style.display="flex";
}
function switchtab(tab){
    if(tab==yweathertab){
        swsearch.classList.remove("bg-[#7A8EA8]");
        sweather.classList.add("bg-[#7A8EA8]");
    }
    if(tab==searchtab){
        swsearch.classList.add("bg-[#7A8EA8]");
        sweather.classList.remove("bg-[#7A8EA8]");
    }
    if(!sessionStorage.getItem("letti") && tab==yweathertab){
        unset_tab(currtab);
        unset_tab(yweathertab);
        unset_tab(searchtab);
        currtab=permissiontab;
        set_tab(permissiontab);
    }
    else if(currtab===tab){
        return;
    }
    else{
        if(currtab==permissiontab){
            unset_tab(permissiontab);
        }
        unset_tab(currtab);
        currtab=tab;
        set_tab(currtab);
    }
 
}

function grant_access(){
     navigator.geolocation.getCurrentPosition((position)=>{
        unset_tab(permissiontab);
        currtab=loading;
        set_tab(loading);
       cords={
        letti:position.coords.latitude,
        longi:position.coords.longitude,
       };
       sessionStorage.setItem("letti",position.coords.latitude);
       sessionStorage.setItem("longi",position.coords.longitude);
       sweather.removeEventListener("click",set_tab(permissiontab));
       sweather.addEventListener("click",set_values);
       set_values();
    })
}

async function get_current_info(){
    let response= await fetch(`http://api.openweathermap.org/geo/1.0/reverse?lat=${sessionStorage.getItem("letti")}&lon=${sessionStorage.getItem("longi")}&appid=${apikey}`);
    let result=await response.json();
    let obj={
        city:result[0].name,
        country_name:result[0].country,
    }
    return obj;
}   

async function get_weather(city) {
    let result;
    let response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`);
    result=await response.json();
    console.log(result);
    return result;
}

async function get_current_weather() {
    let response=await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${sessionStorage.getItem("letti")}&lon=${sessionStorage.getItem("longi")}&appid=${apikey}`);
    let result=await response.json();
    console.log(result);
    return result;    
}

async function set_values(){
    unset_tab(permissiontab);
    unset_tab(searchtab);
    if(!sessionStorage.getItem("letti")){
        currtab=permissiontab;
        set_tab(currtab);
        if(currtab==yweathertab){
            unset_tab(currtab);
        }
        return;
   }
    unset_tab(currtab);
    currtab=loading;
    set_tab(loading);
    let weather_info;
    let info=await get_current_info();
    country_flag.setAttribute("src",`https://flagsapi.com/${info?.country_name}/flat/24.png`);
    weather_info=await get_current_weather();
    let temprature=parseFloat(weather_info.main.temp-273).toFixed(2);
    desc.textContent=weather_info.weather[0].description;
    wimage.setAttribute("src",`https://openweathermap.org/img/wn/${weather_info?.weather[0]?.icon}@2x.png`);
    temp.textContent=temprature+" °C";
    city_text.textContent=weather_info.name;
    windspeed.textContent=weather_info.wind.speed+"m/s";
    humidity.textContent=weather_info.main.humidity+"%";
    clouds.textContent=weather_info.clouds.all+"%";
    console.log(info)
    unset_tab(loading);
    currtab=yweathertab;
    set_tab(yweathertab);
}

async function searchweather(){
    unset_tab(permissiontab);
    unset_tab(yweathertab);
    set_tab(loading);
    let city=search.value;
    let weather_info=await get_weather(city);
    country_flag.setAttribute("src",`https://flagsapi.com/${weather_info?.sys?.country}/flat/24.png`);
    let temprature=parseFloat(weather_info.main.temp-273).toFixed(2);
    desc.textContent=weather_info.weather[0].description;
    wimage.setAttribute("src",`https://openweathermap.org/img/wn/${weather_info?.weather[0]?.icon}@2x.png`);
    temp.textContent=temprature+" °C";
    city_text.textContent=weather_info.name;
    windspeed.textContent=weather_info.wind.speed+"m/s";
    humidity.textContent=weather_info.main.humidity+"%";
    clouds.textContent=weather_info.clouds.all+"%";
    unset_tab(loading);
    currtab=yweathertab;
    set_tab(yweathertab);
}