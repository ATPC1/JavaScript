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
console.log(person.charAt(3))
console.log(person.indexOf("g"));

const p1 = person.substring(0, 4)
console.log(p1)

const p2 = person.slice(3, 4)
console.log(p2)

const pr1 = "      anurag tiwari is the best"
console.log(pr1);
console.log(pr1.trim());//remove unneccessory space and have to method start and end

const url = "https:/youtube.com anurag"
console.log(url);
console.log(url.replace(" ","-"));

console.log(url.split('-'));
console.log(url.includes('anurag'));







