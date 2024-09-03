let pswd_text=document.querySelector('[data-pswd-ln]');
let password_length=document.querySelector('#password-length');
let indicator=document.querySelector('[data-indicator]');
let checked_count=0;
let checkboxes=document.querySelectorAll('input[type=checkbox]');
let pswd=document.querySelector('[data-pswd]');
let password="";
let funarr=[];
const symbols = '~`!@#$%^&*()_-+={[}]|:;"<,>.?/';
password_length.value=10;
pswd_text.textContent=password_length.value;
password_length.addEventListener('input',slider)
function slider(){
    pswd_text.textContent=parseInt(password_length.value);
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
let rand=(min,max)=> Math.floor(Math.random()*(max-min)+min);
get_uppercase=()=>String.fromCharCode(rand(65,90));

get_lowercase=()=>String.fromCharCode(rand(97,122));

get_number=()=>rand(0,9); 

get_symbol=()=> symbols.charAt(rand(0,symbols.length));

get_fun=(arr)=>arr[rand(0,3)];

generate_password=()=>{
    checked_count=check_count();
    if(checked_count==0)return;
    if(checked_count>parseInt(password_length.value)){
        password_length.value=checked_count;
        slider();
    }
    funarr.length=0;
    password="";
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
        let fun=get_fun(funarr);
        password+=fun();
    }
    pswd.value=password;

}
