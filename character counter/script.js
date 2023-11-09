const remainingEl=document.getElementById('remaining-counter');
const totalEl=document.getElementById('total-counter');
const textareaEl=document.getElementById('textarea');

textareaEl.addEventListener('keyup', ()=>{
    updateCounter();

})

function updateCounter(){
    const length=textareaEl.value.length;
    totalEl.innerText=length;
    remainingEl.innerText= textareaEl.getAttribute("maxlength")-length;
}

updateCounter();