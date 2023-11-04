const days=document.getElementById("day");
const hours=document.getElementById("hours");
const minutes=document.getElementById("minutes");
const seconds=document.getElementById("seconds");

const newYearTime = new Date("Jan 1, 2024 00:00:00").getTime();
// updateCountDown()

let x= setInterval(function(){
    const now=new Date().getTime();
    const gap = newYearTime-now;
    const second = 1000;
    const minute =second*60;
    const hour= minute*60;
    const day= hour*24;

    const d= Math.floor(gap/day);
    const h =Math.floor((gap%day)/ hour);
    const m = Math.floor((gap%hour)/minute);
    const s=  Math.floor((gap%minute)/second);

    days.innerText=d;
    hours.innerText=h;
    minutes.innerText=m;
    seconds.innerText=s;
    if (gap<0){
        clearInterval(x);
        document.getElementById('demo').innerHTML='EXPIRED';
    }
    setTimeout(()=>{
        x
    },1000)
})

