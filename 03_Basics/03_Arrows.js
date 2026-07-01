const user = {
    username: "Anurag",
    price: 100,

    welcomeMessage: function(){
        console.log(`${this.username} welcome to our website`);
        console.log(this);
    }

}

user.welcomeMessage(); // Anurag welcome to our website
user.username = "Anurag Kumar";
user.welcomeMessage(); // Anurag Kumar welcome to our website

console.log(this); // this will give window object because this is not inside any object or function

// function boii(){
//     let username = "Anurag";
//     console.log(this.username); 
// }
// boii(); // this will give undefined because this is not inside any object or function
const boii = () => {
    let username = "Anurag";
    console.log(this); 
}
// boii();
// basic arrow function syntax
// const addTwo = (num1, num2) => {
//     return num1 + num2;
// }
// console.log(addTwo(5, 10)); // 15

// eplicit return

const addTwo = (num1, num2) => num1 + num2;
console.log(addTwo(5, 10)); // 15

const another = (num1, num2) => ({username: "Anurag"});
console.log(another(5, 10));

// const array = [1, 2, 3, 4, 5];
// array.forEach();
