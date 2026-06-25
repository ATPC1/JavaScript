// Primitive 

// 7 Type : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scorevalue = 100.3

const isLoggedIn = false;
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherID = Symbol('123')

console.log(id === anotherID);// nop because of strictly

const bigNumber = 123456789123456789n;

// Reference (non primitive)

// Array, Object, Fuctions
const heros = ["Ironman", "Hulk", "Hanuman"];
let myObj = 
{
    name : "Anurag",
    age : 21,
}

let myFunction = function()
{
        console.log("Hello");
        
}

console.log(typeof outsideTemp);
console.log(typeof scorevalue);
console.log(typeof myFunction);

console.log(typeof anotherID)