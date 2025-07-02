// // //  console.log("Hello World");


// // // var a = 123;

// // // console.log(a);

// // // function abc(){
// // //     console.log("This is function abc...");
// // //     function hgf(){
// // //         console.log("This is HGF......");
// // //     }
// // //     hgf();
// // // }

// // // abc();

// // // let b = 300;
// // // console.log(b);

// // // {
// // //     let x = 100;
// // //     let y = 200;
// // //     let z = 300;
// // //     {
// // //         console.log(x);
// // //         console.log(y);
// // //         console.log(z);

// // //         console.log(aa);
// // //         {
// // //             let aa = 20000;
// // //             console.log(x);
// // //             console.log(y);
// // //             console.log(z);
// // //         }
// // //     }
// // // }


// // function abc(){
// //     let a = 100;
// //     let b = 200;
// //     let c = 300;
// //     console.log(d);
// //     function def(){
// //         let d = 400;
// //         function ijk(){
// //             console.log(a);
// //             console.log(b);
// //             console.log(c);
// //         }
// //         ijk()
// //     }
// //     def()
// // }
// // abc()

// function abc(){
//     var d = 4000;
// }
// abc();

// console.log(d);

// for (var i = 0; i<=5; i++){
//    function closure(i){
//      setTimeout(()=>{
//         console.log(i);
//     },2000)
// }
// closure(i);
// }


// HOF

function xyz(cb) {
    return cb();
}

function cb() {
    console.log("I am cb");
}

xyz(cb);