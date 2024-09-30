let boxes=document.querySelectorAll("[data-box]");
let currplayer=document.querySelector("[data-pname]");
let newbtn=document.querySelector("[data-newbox]");
let currentplayer;
let gameinfo=["","","","","","","","",""];
const winningpos=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
let winner="";
winningindex=[];

function init(){
    if(winner!=""){
        winningindex[0].classList.remove("bg-green-500");
        winningindex[1].classList.remove("bg-green-500");
        winningindex[2].classList.remove("bg-green-500");
    }
    winner="";
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

function getcount(){
    let count=0;
    gameinfo.forEach((el)=>{
        if(el!=""){
            count++;
        }
    })
    return count;
}

function gameover(){
    winningpos.forEach((position)=>{
        if(gameinfo[position[0]]!="" && gameinfo[position[1]]!="" && gameinfo[position[2]]!="" &&
            gameinfo[position[0]]==gameinfo[position[1]] && gameinfo[position[1]]==gameinfo[position[2]]){
            winner=currentplayer;
            boxes.forEach((el)=>{
                el.style.pointerEvents="none";
            })
            boxes[position[0]].classList.add("bg-green-500");
            boxes[position[1]].classList.add("bg-green-500");
            boxes[position[2]].classList.add("bg-green-500");
            newbtn.classList.remove("invisible");
            winningindex[0]=boxes[position[0]];
            winningindex[1]=boxes[position[1]];
            winningindex[2]=boxes[position[2]];
            currplayer.innerText=`${currentplayer} won`;
        }
    })
    if(winner!=""){
        return;
    }
    if(getcount()==9 && winner==""){
        currplayer.innerText="game tied";
    }
    else{
        swapturn();
    }

}

function handleclick(index){
    if(gameinfo[index]==""){
        gameinfo[index]=currentplayer;
        boxes[index].innerText=`${currentplayer}`;
    }
   if(getcount()==9){
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
        gameover();
        
    });
})

newbtn.addEventListener("click",function (){
    init();
})

init();