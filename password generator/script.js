let pswd_text=document.querySelector('[data-pswd-ln]');
let password_length=document.querySelector('#password-length');
let indicator=document.querySelector('[data-indicator]');
let checked_count=0;
let checkboxes=document.querySelectorAll('input[type=checkbox]');
let pswd=document.querySelector('[data-pswd]');
let copymsg=document.querySelector('[data-copymsg]');
const symbols = '~`!@#$%^&*()_-+={[}]|:;"<,>.?/';
password_length.value=10;
pswd_text.textContent=password_length.value;
password_length.addEventListener('input',slider);
async function copy(){
    try{
        await navigator.clipboard.writeText(pswd.value);
        copymsg.textContent="copied";
    }
    catch(e){
        copymsg.textContent="failed";
    }
    copymsg.classList.remove('scale-0');
    copymsg.classList.add('scale-1');
    setTimeout(() => {
        copymsg.classList.remove('scale-1');
        copymsg.classList.add('scale-0');
    }, 4000);
}
function slider(){
    pswd_text.textContent=parseInt(password_length.value);
}
function indicatorlogic(){
    if(checked_count==1 || checked_count==2){
        indicator.style='background-color=green';
    }
    else if(checked_count==3){
        indicator.classList.add['bg-orangle-400'];
    }
    else if(checked_count==4){
        indicator.classList.add['bg-red-400'];
    }
}
function set_indicator(color){
    indicator.classList.add="bg-[color]";
}
function check_count(){
    checked_count=0;
    checkboxes.forEach((checkbox)=>{
        if(checkbox.checked==true){
            checked_count++;
        }
    })
    return checked_count;
}
function rand(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
  
  function get_uppercase() {
    return String.fromCharCode(rand(65, 90));
  }
  
  function get_lowercase() {
    return String.fromCharCode(rand(97, 122));
  }
  
  function get_number() {
    return rand(0, 9);
  }
  
  function get_symbol() {
    return symbols.charAt(rand(0, symbols.length));
  }
  
  function get_fun(arr) {
    return arr[rand(0, arr.length)];
  }

function generate_password(){
    checked_count=check_count();
    if(checked_count==0)return;
    if(checked_count>parseInt(password_length.value)){
        password_length.value=checked_count;
        slider();
    }
    let funarr=[];
    let password="";
    if(checkboxes[0].checked){
        funarr.push(get_uppercase);
        password+=get_uppercase();
    }
    if(checkboxes[1].checked){
        funarr.push(get_lowercase);
        password+=get_lowercase();
    }
    if(checkboxes[2].checked){
        funarr.push(get_number);
        password+=get_number();
    }
    if(checkboxes[3].checked){
        funarr.push(get_symbol);
        password+=get_symbol();
    }
    while(password.length<password_length.value){
        password+=get_fun(funarr)();
    }
    pswd.value=password;
}
