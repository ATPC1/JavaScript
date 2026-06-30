// const tinderUser = new Object();
const tinderUser = {}
tinderUser.id= "123abc"
tinderUser.name = "Anurag"
tinderUser.isLoggedIn = false

// console.log(tinderUser);
// { id: '123abc', name: 'Anurag', isLoggedIn: false }

const regularUser = {
    email: "some@gmail.com",
    fullname :{
        userfullname:{
            firstname: "anurag",
            lastname: "Tiwari"
        }
    }
}
// console.log(regularUser.fullname);
// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

// const obj3 = {obj1,obj2};
// const obj3  = Object.assign({},obj1,obj2)
const obj3 = {...obj1, ...obj2}
console.log(obj3);
// { obj1: { '1': 'a', '2': 'b' }, obj2: { '1': 'c', '2': 'd' } }
// { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
// { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
const usersArray = [
    {
        age: 18,
        name: "Anurag",
    },
    {
        age: 19,
        name: "Anurag2",
    }
]

usersArray[1].name
// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// // { id: '123abc', name: 'Anurag', isLoggedIn: false }
// // [ 'id', 'name', 'isLoggedIn' ]
// // [ '123abc', 'Anurag', false ]
// console.log(Object.entries(tinderUser));
// // [ [ 'id', '123abc' ], [ 'name', 'Anurag' ], [ 'isLoggedIn', false ] ]

// console.log(tinderUser.hasOwnProperty('IsLoggedIn'));
// console.log(tinderUser.hasOwnProperty('isLoggedIn'));
// // false
// // true

const course = {
    name: "js in hindi",
    price: 999,
    courseInstructor: "Anurag Tiwari"
}
// course.courseInstructor
const {courseInstructor: instructor} = course
console.log(courseInstructor);
