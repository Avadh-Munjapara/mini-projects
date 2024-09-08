let permissiontab=document.querySelector("[data-permissiontab]")
let yweathertab=document.querySelector("[data-yweathertab]")
let searchtab=document.querySelector("[data-searchtab]")
let loading=document.querySelector("[data-loading]")
let currtab=permissiontab;
let cords;
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
        lett:position.coords.latitude,
        longi:position.coords.longitude,
       };
        unset_tab(permissiontab);
        set_tab(yweathertab);
    })
}
