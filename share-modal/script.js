let modal=document.querySelector('.modal');
let overlay=document.querySelector('.overlay');
function openmodal(){
    modal.classList.remove('scale-0');
    modal.classList.add('scale-1');
    overlay.classList.remove('hidden');
    overlay.classList.add('block');
}

function closemodal(){
    modal.classList.remove('scale-1');
    modal.classList.add('scale-0');
    overlay.classList.remove('block');
    overlay.classList.add('hidden');
}

