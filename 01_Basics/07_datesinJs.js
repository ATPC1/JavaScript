// dates

let mydate = new Date();
console.log(mydate);
console.log(mydate.toString());
console.log(mydate.toDateString());
console.log(mydate.toLocaleDateString());
console.log(mydate.toISOString());
console.log(mydate.toJSON());

/*
2026-06-28T10:07:09.637Z
Sun Jun 28 2026 10:07:09 GMT+0000 (Coordinated Universal Time)
Sun Jun 28 2026
6/28/2026
2026-06-28T10:07:09.637Z
2026-06-28T10:08:10.462Z
*/
console.log(typeof mydate);
//object

let mycreateddate =  new Date(2030,10,26);
console.log(mycreateddate);
console.log(mycreateddate.toDateString());
//2030-11-26T00:00:00.000Z
// Tue Nov 26 2030
let mycreateddate1 =  new Date(2030,10,26, 5,4);
console.log(mycreateddate.toLocaleString());
// 11/26/2030, 12:00:00 AM
 
let mytimestamp = Date.now()
console.log(mytimestamp);

console.log(Math.floor(Date.now()/1000))

let newdate = new Date();
console.log(newdate);

console.log(newdate.getMonth() + 1);

newdate.toLocaleString('default',{
    weekday: "long",
})

