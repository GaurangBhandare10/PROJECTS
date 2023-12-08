const containerEl= document.querySelector('.container');


for (let index = 0; index < 30; index++) {
    const colorContainerEl =document.createElement('div');
    colorContainerEl.classList.add('color-container');
    containerEl.appendChild(colorContainerEl);
}

const containerEls= document.querySelectorAll('.color-container');
function generateColors(){
    containerEls.forEach((colorContainerEl)=>{
        const newColorCode=randomColor();
        colorContainerEl.style.backgroundColor='#'+newColorCode;
        colorContainerEl.innerText='#'+newColorCode;
    });
}

generateColors()

function randomColor(){
    const chars="0123456789abcdef";
    const colorCodeLength=6;
    let colorCode=''
    for (let index = 0; index < colorCodeLength; index++) {
        const randomnumber = Math.floor(Math.random()*15);
        colorCode+=chars.substring(randomnumber,randomnumber+1);
           
    }
    return colorCode;  
}


randomColor();
