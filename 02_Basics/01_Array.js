// array
const myArray = ["anurag","ayush","ujjwal"]
console.log(myArray);
console.log(myArray[2]);
console.log(typeof myArray);
// [ 'anurag', 'ayush', 'ujjwal' ]
// ujjwal
// object
const arr2 = new Array(1,2,3,4,5)
console.log(arr2);
console.log(arr2.length);
console.log(arr2.push(7));

console.log(arr2);
// [ 1, 2, 3, 4, 5 ]
// 5
// 6
// [ 1, 2, 3, 4, 5, 7 ]

arr2.unshift(9) 
console.log(arr2);
// [
//   9, 1, 2, 3,
//   4, 5, 7
// ]
arr2.shift()

const newArr = arr2.join()
 
console.log(arr2);
console.log(newArr);//  convert array into string

// slice, splice

console.log("A", arr2);

const myn1 = arr2.slice(1,3)

console.log(myn1);
console.log("B", arr2)

const myn2 = arr2.splice(1, 3)// manipulate the array
console.log(myn2);
// A [ 1, 2, 3, 4, 5, 7 ]
// [ 2, 3 ]
// B [ 1, 2, 3, 4, 5, 7 ]
// [ 2, 3, 4 ]