let permissiontab=document.querySelector("[data-permissiontab]");
let yweathertab=document.querySelector("[data-yweathertab]");
let searchtab=document.querySelector("[data-searchtab]");
let loading=document.querySelector("[data-loading]");
let city_text=document.querySelector("[data-city]");
let country_flag=document.querySelector("[data-country]");
let currtab=permissiontab;
let cords;
let city;
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
       cords={
        letti:position.coords.latitude,
        longi:position.coords.longitude,
       };
    //    sessionStorage.setItem("latti",position.coords.latitude);
    //    sessionStorage.setItem("longi",position.coords.longitude);
        unset_tab(permissiontab);
        currtab=yweathertab;
        set_tab(yweathertab);
       set_values();
    })
}

async function get_info(){
    let response= await fetch(`http://api.openweathermap.org/geo/1.0/reverse?lat=${cords.letti}&lon=${cords.longi}&appid=${apikey}`);
    let result=await response.json();
    let obj={
        city:result[0].name,
        country_name:result[0].country,
    }
    return obj;
}

async function set_values(){
    let info=await get_info();
    city_text.textContent=info.city;
    country_flag.setAttribute("src",`https://flagsapi.com/${info.country_name}/flat/24.png`);
}