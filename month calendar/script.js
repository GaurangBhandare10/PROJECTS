const monthindex=new Date().getMonth()
const months= [
    'January','February','March','April','May',
    'June', 'July', 'August', 'September', 'October', 'November' ,'December',
]

const monthsEl= document.querySelector('.date h1');
const fulldate= document.querySelector('.date p');
const daysEl= document.querySelector('.days');
monthsEl.innerText=months[monthindex];
fulldate.innerText=new Date().toDateString();
const lastday= new Date(new Date().getFullYear(), monthindex+1,0).getDate();
// +1 indicates, if currently  the month is novmeber then +1 asks it consider as 
// december and then the 0 indicates what is the last day before the start of december
const firstday= new Date(new Date().getFullYear(), monthindex,1).getDay()-1;
// monthindex gives the current month and the 1 asks it to give the first day of the current month
// console.log(firstday)
// console.log(lastday)

let days="";

for(let i=firstday; i>0; i--){
    days += `<div class='empty'></div>`;
}

for (let i = 1; i <= lastday; i++) {
    if (i === new Date().getDate()) {
      days += `<div class="today">${i}</div>`;
    } else {
      days += `<div>${i}</div>`;
    }
  }
  

daysEl.innerHTML=days