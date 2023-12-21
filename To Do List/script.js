const inputEl=document.querySelector('.input');
const formEl=document.querySelector('.form')
// const checkBoxIconEl=document.querySelector('fa-square-check');
// const trashIconEl=document.querySelector('fa-trash');
const ulEl=document.querySelector('.list')
let list =JSON.parse(localStorage.getItem('list'));

list.forEach(task=>{
    toDoList(task)
})

formEl.addEventListener('submit',(e)=>{
    e.preventDefault();
    // to avoid the reload when we press enter
    toDoList();
});

function updateLocalStorage(){
    const LiEls=document.querySelectorAll('li');
    list =[]
    LiEls.forEach(element => {
        list.push({
            name:element.innerText,
            checked:element.classList.contains('checked')
        })
    });
    localStorage.setItem('list',JSON.stringify(list));
};



function toDoList(task){
    let newTask=inputEl.value
    if (task) {
        newTask=task.name
    }
    
    const liEl=document.createElement('li');
    if (task && task.checked){
        liEl.classList.add('checked');
    }
    liEl.innerText=newTask;
    ulEl.appendChild(liEl);
    // adding the li element to the ul when new value is entered
    inputEl.value='';
    // the lines from 23 to 28 are defined to add the trash and checkbox logo
    // to the newly added items to the list
    const checkBtnEl= document.createElement('div');
    checkBtnEl.innerHTML=`<i class="fa-regular fa-square-check"></i>`;
    liEl.appendChild(checkBtnEl);
    const trashBtnEl= document.createElement('div');
    trashBtnEl.innerHTML=`<i class="fa-solid fa-trash"></i>`;
    liEl.appendChild(trashBtnEl);    
    checkBtnEl.addEventListener('click',()=>{
        liEl.classList.toggle('checked');
        updateLocalStorage();
    })
    trashBtnEl.addEventListener('click',()=>{
        liEl.remove();
        updateLocalStorage();
    })
    updateLocalStorage();
};


