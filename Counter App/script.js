let counter=document.querySelector('#counter');

function increment(){
    console.log('increment called');
    let scount=counter.textContent;
    let count=parseInt(scount);
    count=count+1;
    counter.textContent=count;   
}   

function decrement(){
    console.log('decrement called');
    let scount=counter.textContent;
    let count=parseInt(scount);
    count=count-1;
    counter.textContent=count;   
}