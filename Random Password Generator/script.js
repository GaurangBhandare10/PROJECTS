const btnEl =document.querySelector('.btn');
const inputEl=document.getElementById('input');
const copyIconEl=document.querySelector('.fa-copy');
const alertContainerEl=document.querySelector('.alert-container');

btnEl.addEventListener('click', ()=>{
    createPassword();
})


function createPassword(){
    const chars='0123456789abcdefghijklmnopqrstuvwxtz!@#$%^&*()_+?:{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const passwordLength=14;
    let password='';
    for (let index = 0; index < passwordLength; index++) {
        const randomNum = Math.floor(Math.random()*chars.length);
        password+=chars.substring(randomNum,randomNum+1);
    
    }
    inputEl.value=password;
    alertContainerEl.innerText= password+ 'copied';
}

copyIconEl.addEventListener('click', ()=>{
    copyPassword()
    if(inputEl.value){alertContainerEl.classList.remove('active');
    setTimeout(()=>{
        alertContainerEl.classList.add('active');
    },2000)}
    
})

function copyPassword(){
    inputEl.select();
    // the above is for bigger screen Devices
    // the below is for mobile phones
    inputEl.setSelectionRange(0,9999);
    navigator.clipboard.writeText(inputEl.value);
    // the above line is used to copy the value to clipboard
}

