let counter=document.querySelector('#counter');

function increment(){
    let scount=counter.textContent;
    let count=parseInt(scount);
    count=count+1;
    counter.textContent=count;   
}   

function decrement(){
    let scount=counter.textContent;
    let count=parseInt(scount);
    count=count-1;
    counter.textContent=count;   
}