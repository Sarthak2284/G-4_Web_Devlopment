console.log("SCRIPT START")

// setTimeout(()=>{
//     console.log("I am going to College..")
// },4000)

// setTimeout(()=>{
//     console.log("I am going to Class..")
// },3000)

function ok(cb){
    console.log("This is Ok");
    setTimeout(cb,3000);
}

function fine(cb){
    console.log("Youre in fine");
    setTimeout(cb,2000);
}

function thankyou(cb){
    console.log("Thanks for being here.")
    setTimeout(cb,4000)
}

console.log("SCRIPT END")