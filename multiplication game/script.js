const num1= Math.ceil(Math.random()*10);
const num2= Math.ceil(Math.random()*10);
const containerEl= document.querySelector('.container')
const questionEl= document.getElementById('question');
questionEl.innerText=`What is ${num1} muiltiplied by ${num2}?`;

const correctans= num1*num2;
const scoreEl =document.getElementById('score');
const formEl= document.getElementById('form');
const inputEl= document.getElementById('input');
var score=JSON.parse(localStorage.getItem('score'));

if (!score)
{
    score=0;
}

scoreEl.innerText=`score:${score}`;

formEl.addEventListener('submit', ()=>{
    const userans= +inputEl.value;
    // the above +  is wriiten to convert the input value from string to number
    if(userans===correctans){
        score+=1;
        updateLocalStorage();

    }
    else{
        score-=1;
        containerEl.classList.add('active');
        updateLocalStorage();
    }
})

function updateLocalStorage(){
    localStorage.setItem('score', JSON.stringify(score))

}