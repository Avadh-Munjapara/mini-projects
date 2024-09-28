let box=document.querySelector("[data-box]");
let currplayer=document.querySelector("[data-pname]");
let newbtn=document.querySelector("[data-newbox]");
currplayer.textContent="Current Player 1";
let turn=0;
let clickedarray=[];
box.addEventListener("click",function (event){
    let clicked=event.target;
    if(turn==0){
        currplayer.textContent="Current Player 2";
        turn=1;
        clicked.innerHTML="<i class=\"text-5xl text-white fa-solid fa-o\"></i>"
    }
    else{
        currplayer.textContent="Current Player 1";
        turn=0;
        clicked.innerHTML="<i class=\"text-5xl text-white fa-solid fa-x\"></i>"
    }
    clickedarray.push(clicked);

    console.log(clicked.classList)
})

newbtn.addEventListener("click",function (){
    for(let i=0;i<clickedarray.length;i++){
        let el=clickedarray[i];
        el.innerHTML="";
    }
})
