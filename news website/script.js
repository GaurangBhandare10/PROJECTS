const API_KEY= 'ab76fbcc6437447fabd3b8a3a9b47373';
const url='https://newsapi.org/v2/everything?q=';

window.addEventListener('load', ()=>fetchNews("India"));



function reload() {
    window.location.reload();
}
async function fetchNews(query){
    const res= await fetch(`${url}${query}&apikey=${API_KEY}`)
    const data=await res.json();
    console.log(data);
    bindData(data.articles);    
}

function bindData(articles){
    const cardsContainer= document.getElementById('cards-container');
    const newsCardTemplate = document.getElementById('template-news-card');
    cardsContainer.innerHTML="";

    articles.forEach(article => {
        if(!article.urlToImage) return;
        const cardClone= newsCardTemplate.content.cloneNode(true);
        fillDatainCard(cardClone, article);
        cardsContainer.appendChild(cardClone);
        
    });
}

function fillDatainCard(cardClone,article){
    const newsImg= cardClone.querySelector('#news-img');
    const newsTitle= cardClone.querySelector('#news-title');
    const newsSource= cardClone.querySelector('#news-source');
    const newDesc= cardClone.querySelector('#news-desc');

    newsImg.src=article.urlToImage;
    newsTitle.innerHTML=article.title;
    newDesc.innerHTML=article.description;

    const date=new Date(article.publishedAt).toLocaleString("en-US", {
        timezone:'Asia/Jakarta'
    });

    newsSource.innerHTML= `${article.source.name}• ${date}`;


    cardClone.firstElementChild.addEventListener('click', ()=>{
        window.open(article.url, '_blank');
    })
}
let curSelectedNav=null;
function onNavItemCLick(id){
    fetchNews(id);
    const navItem=document.getElementById(id);
    curSelectedNav?.classList.remove('active');
    curSelectedNav=navItem;
    curSelectedNav.classList.add('active');
}

const searchbutton=document.getElementById('search-button');
const searchbar=document.getElementById('search-bar');

searchbutton.addEventListener('click', ()=>{
    const query =searchbar.value;
    if(!query) return;
    fetchNews(query);
    curSelectedNav?.classList.remove('active');
    curSelectedNav=null;
//     document.getElementById("search-bar")
//     .addEventListener("keyup", function(event) {
//     event.preventDefault();
//     if (event.key === 13) {
//         document.getElementById("search-button").click();
//         console.log('button clicked')
//     }
// });

})