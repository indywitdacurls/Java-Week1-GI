// Very Easy// 
/*var num1 = 6;
var num2 = 2;
let difference = 6 - 2; 
console.log(`The difference between ${num1} and ${num2} is ${difference}`);*/

//Easy//
/*let brother= "Rafael";
let mother= "Erica";
if (mother.length > brother.length)
{
    let diff = mother.length - brother.length;
    console.log(`the name ${brother} is shorter than ${mother} by ${diff} characters`);
}
else 
{
 let diff = brother.length - mother.length
    console.log(`the name ${brother} is longer than ${mother} by ${diff} characters`);
}*/

// Medium //
/*let voiceControl = prompt("Type your message here");

if (voiceControl == voiceControl.toUpperCase()) {
    console.log("Why are you yelling?")
}
else if (voiceControl == voiceControl.toLowerCase()) {
    console.log("Why are you whispering?")
}
else {
    console.log("You're talking normally")
}

// Hard //
/*function add(p1,p2){
return p1+p2
}
console.log(add(7,2))
function subtract(z,t){
return z-t
}
console.log(subtract(10,4))
function multiply(x,y){
return x*y
}
console.log(multiply(3,6))
function divide(p1,p2){
return p1/p2
}
console.log(divide(15,5))*/

//Very Hard//
// Simple Calculator//

//Operator Input// 
const Input = prompt(`Enter operator ( either +, -, *, or /): `);

//User Input//
const number1= parseFloat( prompt( `Enter first number: `));
const number2= parseFloat( prompt(` Enter second number: `));
let result;

// If.. Else If... Else//
if (operator == '+') {
    result = number1 + number2;
}
else if (operator == '-') {
    result = number1 - number2;
}
else if (operator == '*') {
    result = number1 * number2;
}
else {
    result = number1 / number2
}

//Display Result
console.log(`${number1} ${operator} ${number2} = ${result}`);