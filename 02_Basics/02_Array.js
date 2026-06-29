const marvel_heros = ["spider","Iron man","deadpool"];
const dc_heros = ["superman","flash","wonderwomen"];
// marvel_heros.push(dc_heros)
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);
const all_heros = marvel_heros.concat(dc_heros)
// console.log(all_heros);

const all_heros_new = [...marvel_heros,...dc_heros]
// console.log(all_heros_new);
 const annotherArray = [1,2,3,[3,4],5,[6,7,8,[10,12]]]
 console.log(annotherArray.flat(Infinity));
//  [
//    1, 2, 3, 3,  4,
//    5, 6, 7, 8, 10,
//   12
// ]

console.log(Array.isArray("anurag"));
console.log(Array.from("Anurag"));
console.log(Array.from({name: "anurag"}));
// empty array ..... interresting

let s1 =1000;
let s2 = 2342;
let s3 = 2343;
console.log(Array.of(s1,s2,s3));
