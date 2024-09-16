let key="";
async function get_user(username){
  try{
    let response=await fetch(`https://api.github.com/users/${username}`,{
      headers:{
        Authorization:`Bearer ${key}`
      }
    })
    return response.json();
  }
  catch(err){
    console.log(err);
    return null;
  }
}

let wrapper=document.querySelector("[data-wrapper]");
let search=document.querySelector("[data-search]");
let info=document.querySelector("[data-info]");
let data=document.querySelector("[data-data]");
let root=document.documentElement.style;
let modimg=document.querySelector("[data-modimg]");
let modtext=document.querySelector("[data-modtext]");
let currmod="light";
function chmod(){
  if(currmod=="light"){
    currmod="dark";
    modtext.textContent="Light";
    wrapper.style.color="#FFFFFF";
    root.setProperty("--backcolor","#141D2F");
    root.setProperty("--headcolor","#FFFFFF");
    root.setProperty("--fontcolor","#FFFFFF");
    root.setProperty("--contback","#1E2A47");
    root.setProperty("--bright","1000%");
    modimg.setAttribute("src","assets/images/sun-icon.svg");
    
  }else{
    currmod="light";
    modtext.textContent="Dark";
    wrapper.style.color="#000000";
    root.setProperty("--backcolor","#F6F8FF");
    root.setProperty("--headcolor","#4B6A9B");
    root.setProperty("--fontcolor","#778FB3");
    root.setProperty("--contback","#FFFFFF");
    root.setProperty("--bright","100%");
    modimg.setAttribute("src","assets/images/moon-icon.svg");
  }
}

function get_input(){
  let user=input.value;
  return user;
}

let btn=document.querySelector("[data-btn]");
let input=document.querySelector("#username");
input.addEventListener("keydown",(event)=>{
  if(event.key=="Enter"){
    let user=get_input();
    if(user.length!=0)  render_info(user);
  }
})
btn.addEventListener("click",()=>{
    let user=get_input();
    if(user.length!=0)  render_info(user);
});
let alert=document.querySelector("[data-alert]");

let cross=document.querySelector("[data-cross]");

if(input.value){
  cross.style.display="inline";
}

cross.addEventListener("click",function (){
  let text= 
  input.textContent.length=0;
});

input.addEventListener("input",function (){
  if(input.value.length!=0){
    cross.style.display="inline";
  }
  else{
    cross.style.display="none";
  }
});


async function render_info(user){

  let avatar=document.querySelector("[data-avatar]");
  let username=document.querySelector("[data-username]");
  let joindate=document.querySelector("[data-joindate]");
  let link=document.querySelector("[data-link]");
  let repos=document.querySelector("[data-repos]");
  let followers=document.querySelector("[data-followers]");
  let following=document.querySelector("[data-following]");
  let bio=document.querySelector("[data-bio]");
  let website=document.querySelector("[data-website]");
  let twitter=document.querySelector("[data-twitter]");
  let company=document.querySelector("[data-company]");
  let locationn=document.querySelector("[data-location]");
  let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  function checknull(para1,para2){
    if(para1===null || para1===""){
      para2.style.opacity=0.5;
      para2.previousElementSibling.style.opacity=0.5;
      return true;
    }   
    else{
      para2.style.opacity=1;
      para2.previousElementSibling.style.opacity=1;
      return false;
    } 
      
  }

  let user_data=await get_user(user);
  if(user_data.login){
    alert.textContent="";
    console.log(user_data); 
    avatar.src=`${user_data?.avatar_url}`;
    username.textContent=`${user_data?.name}`;
    let datesegment=user_data.created_at.split("T").shift().split("-");
    joindate.textContent=`Joined ${datesegment[2]} ${months[datesegment[1]-1]} ${datesegment[0]}`;
    link.textContent=`@${user_data.login}`;
    link.href=`${user_data?.html_url}`;
    bio.textContent= user_data.bio===null ?'This profile has no bio':`${user_data?.bio}`;
    repos.textContent=`${user_data?.public_repos}`;
    followers.textContent=`${user_data?.followers}`;
    following.textContent=`${user_data?.following}`;
    locationn.textContent=checknull(user_data.location,locationn)?`Not Available`:`${user_data?.location}`;
    website.textContent=checknull(user_data.blog,website)?`Not Available`:`${user_data?.blog}`
    twitter.textContent=checknull(user_data.twitter_username,twitter)?`Not Available`:`${user_data?.twitter_username}`;
    company.textContent=checknull(user_data.company,company)?`Not Available`:`${user_data?.company}`;
  }
  else{
    alert.textContent="no search results found";
  }
}
render_info("Avadh-Munjapara");