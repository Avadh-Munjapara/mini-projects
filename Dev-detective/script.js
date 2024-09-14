
let key="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";
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

async function render_info(user){
  let avatar=document.querySelector("[data-avatar]");
  let username=document.querySelector("[data-username]");
  let joindate=document.querySelector("[data-joindate]");
  let link=document.querySelector("[data-link]");
  let bio=document.querySelector("[data-bio]");
  let repos=document.querySelector("[data-repos]");
  let followers=document.querySelector("[data-followers]");
  let following=document.querySelector("[data-following]");
  let location=document.querySelector("[data-location]");
  let website=document.querySelector("[data-website]");
  let twitter=document.querySelector("[data-twitter]");
  let company=document.querySelector("[data-company]");
  let alert=document.querySelector("[data-alert]");
  let user_data=await get_user(user);
  if(user_data.login){
    alert.textContent="";
    console.log(user_data);
    avatar.src=`${user_data?.avatar_url}`;
    username.textContent=`${user_data?.name}`;
    joindate.textContent=`${user_data?.created_at}`;
    link.textContent=`@${user_data.login}`;
    link.href=`${user_data?.html_url}`;
    bio.textContent=`${user_data?.bio}`;
    repos.textContent=`${user_data?.public_repos}`;
    followers.textContent=`${user_data?.followers}`;
    following.textContent=`${user_data?.following}`;
    location.textContent=`${user_data?.location}`;
    website.textContent=`${user_data?.blog}`
    twitter.textContent=`${user_data?.twitter_username}`;
    company.textContent=`${user_data?.company}`;
  }
  else{
    alert.textContent="no search results found";
  }
}

render_info("Avadh-Munjapara");
