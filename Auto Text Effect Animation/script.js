const conatinerEl= document.querySelector('.container')

const careers= ['Fresher','Web Developer','Educator','Sports Enthusiast']
let careerIndex=0

let characterIndex=0
updateText()

function updateText(){
    characterIndex++
    conatinerEl.innerHTML=`<h1>I am ${careers[careerIndex].slice(0,1)==='E'? 'an':'a'} ${careers[careerIndex].slice(0,characterIndex)}</h1>`;
    if (characterIndex===careers[careerIndex].length){
        careerIndex++
        characterIndex=0
    }
    if (careerIndex===careers.length){
        careerIndex=0;
    }
    setTimeout(updateText,400)
}

// since we want that typing effect i.e basically each letter of the word  should appear one by one threfore
// we have added the settimeoout  method to the updateText function where each letter of the word appears after
// 0.4 seconds