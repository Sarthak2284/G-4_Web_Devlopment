function greet(){

}


function welcome(welcomeMessage, goodByeMessage){
    console.log(welcomeMessage+", "+ this.student_Name + " is a student of class " + this.student_class + ". " +goodByeMessage);
}

const student1 = {
    student_Name:"Sarthak",
    student_class:"G-4"
}

const student2 = {
    student_Name:"Kabir",
    student_class:"G-4"
}
console.log("--------------CALL-----------------");
welcome.call(student1,"Good Morning", "Thankyou..");
welcome.call(student2, "Good Evening","Thnakyou..");
console.log("--------------BIND-----------------");
const bindWelcome1 = welcome.bind(student1);
bindWelcome1("Good Afternoon", "Thankyou....");
const bindWelcome2 = welcome.bind(student2);
bindWelcome2("Good Afternoon", "Thankyou....");



// Call vs Apply vs Bind
// In call:- Immediate Directly, arrguments:- Seprate value
// In Apply :- Immediate Directly, arguments:- As an Array.
// In bind:- Store the value and call later.


// Currying:- 
// Defination:- That we are not passing every argument at a same time.
// Purpose:- To control the flow

// SubMway
function chooseBread(bread) {
    return function choosePatty(patty) {
        return function wantCheese(cheese) {
            return `You selected a ${bread} bread with ${patty} patty and cheese: ${cheese}`;
        };
    };
}

console.log(chooseBread("SourDough")("Paneer")("YES"));

function sum(a){
    return function sum(b){
        return function sum(c){
            return a+b+c;
        }
    }
}

console.log(sum(1)(2)(3)); 



// Event-Bubbling and Event-Capturing:

// Event-Bubbling:-
// const grandfather = document.getElementById('grandfather');
// const parent = document.getElementById('parent');
// const child = document.getElementById('child');


// grandfather.addEventListener('click',()=>{
//     console.log("Grandfather Clicked!!!!");
// })

// parent.addEventListener('click',()=>{
//     console.log("Parent Clicked!!!!");
// })

// child.addEventListener('click',()=>{
//     console.log("Child Clicked!!!!");
// })

// Event-Capturing:-
const grandfather = document.getElementById('grandfather');
const parent = document.getElementById('parent');
const child = document.getElementById('child');


grandfather.addEventListener('click',()=>{
    console.log("Grandfather Clicked!!!!");
}, true)

parent.addEventListener('click',()=>{
    
        console.log("Parent Clicked!!!!");
}, true)

child.addEventListener('click',()=>{
    console.log("Child Clicked!!!!");
}, true)