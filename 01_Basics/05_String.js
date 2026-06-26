const name = "Anurag"
const email = "anurag@gmail.com"

// if i wann add these then ppl can do like this
//console.log(name + email + "yes");
// but no the more flexible and modern way to do this is below

console.log(`My email is ${email} and my name is ${name}`);

let person = new String("anurag");
console.log(person[0]);// to check the key and there value
console.log(person.__proto__);
console.log(person.length);
console.log(person.toUpperCase);
console.log(person.charAt(2));



