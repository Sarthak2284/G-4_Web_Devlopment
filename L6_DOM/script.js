// Event-Capturing:-
const grandfather = document.getElementById('grandfather');
const parent = document.getElementById('parent');
const child = document.getElementById('child');


grandfather.addEventListener('click',(e)=>{
    console.log("Grandfather Clicked!!!!");
    e.stopPropagation(); 
})

parent.addEventListener('click',(e)=>{
    
        console.log("Parent Clicked!!!!");
        e.stopPropagation();
})

child.addEventListener('click',(e)=>{
    console.log("Child Clicked!!!!");
    e.stopPropagation();
})