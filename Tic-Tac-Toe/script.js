let boxes=document.querySelectorAll("[data-box]");
let currplayer=document.querySelector("[data-pname]");
let newbtn=document.querySelector("[data-newbox]");
let currentplayer;
let gameinfo=["","","","","","","","",""];
const winningpos=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];


function init(){
    currentplayer="X";
    currplayer.textContent=`Current Player : ${currentplayer}`;
    boxes.forEach(function(el){
        el.innerText="";
        el.style.pointerEvents="all";
    })
    gameinfo.forEach(function(el,index){
        gameinfo[index]="";
    })
    newbtn.classList.add("invisible");
}

// function gameover(){
//     winningpos.forEach(position){
//         posit
//     }
// }

function handleclick(index){
    if(gameinfo[index]==""){
        gameinfo[index]=currentplayer;
        boxes[index].innerText=`${currentplayer}`;
    }
    let count=0;
    gameinfo.forEach((el)=>{
        if(el!=""){
            count++;
        }
    })
    if(count==9){
        newbtn.classList.remove("invisible");
    }
}

function swapturn(){
    if(currentplayer=="X"){
        currentplayer="O";
    }
    else{
        currentplayer="X";
    }
    currplayer.innerText=`Current Player : ${currentplayer}`;
}

boxes.forEach(function(el,index){   
    el.addEventListener("click",()=>{
        el.style.pointerEvents="none";
        handleclick(index);
        // gameover();
        swapturn();
    });
})

newbtn.addEventListener("click",function (){
    init();
})

init();