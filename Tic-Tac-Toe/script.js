let boxes=document.querySelectorAll("[data-box]");
let currplayer=document.querySelector("[data-pname]");
let newbtn=document.querySelector("[data-newbox]");
currplayer.textContent="Current Player X";
let turn=0;
let clickedarray=[];
let ox=function (e){
    let clicked=e.target;
    if(turn==0){
        currplayer.textContent="Current Player X";
        turn=1;
        clicked.innerHTML="<i class=\"text-5xl text-white fa-solid fa-o\"></i>"
    }
    else{
        currplayer.textContent="Current Player O";
        turn=0;
        clicked.innerHTML="<i class=\"text-5xl text-white fa-solid fa-x\"></i>"
    }
    clickedarray.push(clicked);
    clicked.removeEventListener("click",ox);
};

boxes.forEach(function(el){
    el.addEventListener("click",ox);
})

newbtn.addEventListener("click",function (){
    
    clickedarray.forEach(function(el){
        el.innerHTML="";
        el.addEventListener("click",ox);
    })
    clickedarray.length=0;
})
