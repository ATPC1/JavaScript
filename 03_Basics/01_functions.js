function sayMyName() {
    console.log("A");
    console.log("N");
    console.log("U");
    console.log("R");
    console.log("A");
    console.log("G");
}

//sayMyName();
function addTwoNumbers(num1, num2) {
    console.log(num1 + num2);
}
addTwoNumbers(5, 10);

function addTwoNumbers1(num1, num2){
    // let result = num1 + num2;
    // return result;
    return num1 + num2;
}
const result = addTwoNumbers1(5, 10);
// console.log("Result:", result); 

function justLoggedInUser(userName) {
        if(userName===undefined){
            return "Please provide a user name";
        }
        return `${userName} just logged in`;
}
// console.log(justLoggedInUser("Anurag"));
// console.log(justLoggedInUser());

function addTwoNumbers2(...numbers){
    return numbers
}
// console.log(addTwoNumbers2(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
const user = {
    firstName: "Anurag",
    lastName: "Kumar",
    role: "Admin",
    loginCount: 25,
}
 function handleObject(obj){
    console.log(`First Name: ${obj.firstName}, Last Name: ${obj.lastName}, Role: ${obj.role}, Login Count: ${obj.loginCount}`);
 }
//  console.log(handleObject(user));
 handleObject({
    firstName: "Anurag",
    lastName: "tiwari",
    role: "Admin",
    loginCount: 21,
})

const myNewArray = [200, 400, 600, 800, 1000];
function resturnSecondValue(getArray){
    return getArray[1];
}
// console.log(resturnSecondValue(myNewArray));
console.log(resturnSecondValue([100, 200, 300, 400, 500]));