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
let currtab=permissiontab;
let cords;
let apikey='02dc0eac1830db04da64d6ce795cdb63';
function unset_tab(tab){
    tab.style.display="none";
}
function set_tab(tab){
    tab.style.display="flex";
}
function switchtab(tab){
    if(currtab===tab){
        return;
    }
    else if(typeof(cords)=='undefined' && tab==yweathertab){
        unset_tab(currtab);
        currtab=permissiontab;
        set_tab(currtab);
    }
    else{
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

async function set_values(){;
    let weather_info
    let info=await get_current_info();
    country_flag.setAttribute("src",`https://flagsapi.com/${info.country_name}/flat/24.png`);
    currtab=yweathertab;
    if(currtab==yweathertab){
        weather_info=await get_current_weather();
    }
    let temprature=parseFloat(weather_info.main.temp-273).toFixed(2);
    desc.textContent=weather_info.weather[0].description;
    wimage.setAttribute("src",`https://openweathermap.org/img/wn/${weather_info.weather[0].icon}@2x.png`);
    temp.textContent=temprature+" °C";
    city_text.textContent=weather_info.name;
    windspeed.textContent=weather_info.wind.speed+"m/s";
    humidity.textContent=weather_info.main.humidity+"%";
    clouds.textContent=weather_info.clouds.all+"%";
    unset_tab(loading);
    set_tab(yweathertab);
}

async function searchweather(){
    set_tab(loading);
    let city=search.value;
    let weather_info=await get_weather(city);
    country_flag.setAttribute("src",`https://flagsapi.com/${weather_info.sys.country}/flat/24.png`);
    let temprature=parseFloat(weather_info.main.temp-273).toFixed(2);
    desc.textContent=weather_info.weather[0].description;
    wimage.setAttribute("src",`https://openweathermap.org/img/wn/${weather_info.weather[0].icon}@2x.png`);
    temp.textContent=temprature+" °C";
    city_text.textContent=weather_info.name;
    windspeed.textContent=weather_info.wind.speed+"m/s";
    humidity.textContent=weather_info.main.humidity+"%";
    clouds.textContent=weather_info.clouds.all+"%";
    unset_tab(loading);
    set_tab(yweathertab);
}