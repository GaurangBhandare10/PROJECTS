var cursorEl=document.getElementById('cursor');
var cursorBlurEl=document.getElementById('cursorBlur');
var navheadingsEl = document.querySelectorAll('#nav h4');

document.addEventListener('mousemove',(e)=>{
    cursorEl.style.left=e.x+'px';
    cursorEl.style.top=e.y+'px';
    cursorBlurEl.style.left=e.x-250 +'px';
    cursorBlurEl.style.top=e.y-250 +'px';
})


gsap.to('#nav', {
    backgroundColor:'#000',
    duration:1,
    height:'110px',
    duration:0.5,
    scrollTrigger:{
        trigger:'#nav',
        scroller:'body',
        start:'top -12%',
        end:'top -13%',
        scrub:1
    }
})

gsap.to('#main',{
    backgroundColor:'#000',
    scrollTrigger:{
        trigger:'#main',
        scroller:'body',
        // markers:true,
        start:'top 50vh',
        end:'top -100vh',
        scrub:2
        

    }
})

navheadingsEl.forEach(function(elem){
    elem.addEventListener('mouseenter', ()=>{
        cursorEl.style.scale=2;
        cursorEl.style.border= '1px solid #fff';
        cursorEl.style.backgroundColor='transparent';

    })
    elem.addEventListener('mouseleave', ()=>{
        cursorEl.style.scale=1;
        cursorEl.style.border= '0px solid #95c11e';
        cursorEl.style.backgroundColor='#95c11e';

    })
})

gsap.from('#about-us img, #about-us-in',{
    y:50,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:'#about-us',
        scroller:'body',
        start:'top 70%',
        end:'top 65%',
        scrub:3
    }

})
gsap.from('.card',{
    scale:0.8,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:'.card',
        scroller:'body',
        start:'top 70%',
        end:'top 65%',
        scrub:1
    }

})

gsap.from('#colon1',{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:'#colon1',
        croller:'body',
        start:'top 55%',
        end:'top 45%',
        scrub:4
    }
})
gsap.from('#colon2',{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:'#colon1',
        croller:'body',
        start:'top 55%',
        end:'top 45%',
        scrub:4
    }
})

gsap.from('#page4 h1',{
    y:50,
    duration:1,
    scrollTrigger:{
        trigger:'#page4 h1',
        scroller:'body',
        start:'top 75%',
        end:'top 70%',
        scrub:3
    }
})