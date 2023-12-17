const testimonial=[
    {
        name:'Cherise-G',
        photourl:'https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D',
        text:'I am so glad to be part of this beautiful organistaion whicih has givn me a platfoem to express my coding skills and to solve all the difficulties that i ever face in my life'
    },
    {
        name:'Dave',
        photourl:'https://images.unsplash.com/flagged/photo-1573740144655-bbb6e88fb18a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfDF8MHx8fDA%3D',
        text:"I absolutely love my new XYZ blender! It's powerful, easy to clean, and makes the smoothest smoothies ever. I can't imagine my kitchen without it now."
    },
    {
        name:'Virat',
        photourl:'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHVzZXJ8ZW58MHwxfDB8fHww',
        text:"I was skeptical at first, but the ABC Fitness Program transformed my health and fitness. The trainers are motivating, the workouts are challenging but doable, and the results speak for themselves. I've never felt better!"
    },
];

const imgEl= document.querySelector('.img')
const textEl= document.querySelector('.text')
const usernameEl= document.querySelector('.username')

let index=0;

updateTestimonials();

function updateTestimonials(){
    const {name,photourl,text}=
    testimonial[index]
    imgEl.src=photourl
    textEl.innerText=text
    usernameEl.innerText=name
    index+=1
    if(index===testimonial.length){
        index=0;
    }
    setTimeout(()=>{
        updateTestimonials()
    },6000)
}