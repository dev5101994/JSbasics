console.log("Swapping number")

let a = 1;
let b = 2;
let c;

c = a
a = b
b = c

console.log(`a : ${a} b :${b} `)

console.log("/////////////////swapping value enter by User///////////////////////")
const prompt = require('prompt-sync')();
let num1 = prompt('Enter num1=')
let num2 = prompt('Enter num2=')

let swap;

swap = num1
num1 = num2
num2 = swap

console.log(`num1=${num1} num2=${num2}`)
