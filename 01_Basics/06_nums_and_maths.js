const score = 600
const balance = new Number(500);

console.log(score , balance);

console.log(balance.toString().length);
console.log(balance.toFixed(1));

const anothernumber = 106.5526352
console.log(anothernumber.toPrecision(5));

const othernumber = 100000
console.log(othernumber.toLocaleString());

//**************************************************************MAths**************************************************************
/*
console.log(Math);
console.log(Math.sqrt(4))
console.log(Math.abs(-4));
console.log(Math.floor(4.2));
console.log(Math.ceil(4.5));
console.log(Math.round(4.6));
console.log(Math.min(2,3,5,6));
console.log(Math.max(2,3,5,6));
*/

console.log(Math.random());
console.log(Math.random()*10);
console.log((Math.random()*10)+1);
console.log(Math.floor(Math.random()*10)+1);

const min = 10;
const max = 20;

console.log(Math.floor(Math.random()*(max-min+1))+min);





