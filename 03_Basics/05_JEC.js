// JEC stands for JavaScript Execution Context. 
// It is a concept in JavaScript that refers to the environment in which JavaScript code is executed.
//  The execution context determines how variables, functions, and objects are accessed and manipulated during the execution of code.
/*so jec is run into two Types that are:

1. Global Execution Context
2. Function Execution Context
 but when we use mangoose 
 then we have to use another type that
 is called as 3:Evalution Execution Context
 
 ********
 when a js file runs then it runs into two phases ,
 1st is memory creation phase and 
 2nd is code execution phase
 */
let val1 = 10;
let val2 = 20;
function addTwoNumbers(num1, num2) {
    let sum = num1 + num2;
    return sum;
}

let result1 = addTwoNumbers(val1, val2);
let result2 = addTwoNumbers(30, 40);