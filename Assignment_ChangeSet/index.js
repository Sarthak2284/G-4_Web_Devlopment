const { add2numbers } = require('./script');

let a = 5;
let b = 3;
let sum = add2numbers(a, b);
let difference = subtract2numbers(a, b);
let product = multiply2numbers(a, b);

console.log(`The difference between ${a} and ${b} is: ${difference}`);
console.log(`The product of ${a} and ${b} is: ${product}`);
console.log(`The sum of ${a} and ${b} is: ${sum}`);
