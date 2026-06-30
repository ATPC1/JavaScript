//object literals
const mySum = Symbol("key1")

const JsUser = {
    name: "Anurag",
    "full name" : "Anurg Tiwari",
    [mySum] : "mykeys",
    age:18,
    location: "Banngalore",
    email: "anuragtiwari@gmail.com",
    isLoggesIn: false,
    
}
// excess value of object
// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySum]);
// //how to change
// JsUser.email ="anurag@gmail.com"
// Object.freeze(JsUser)
// JsUser.email = "asdfghj@gmail.com"

// console.log(JsUser);

JsUser.greeting = function()
{
    console.log('hello admin');
}
console.log(JsUser.greeting());

JsUser.greeting2 = function()
{
    console.log(`hello admin,${this.name}`);
}
console.log(JsUser.greeting2());


