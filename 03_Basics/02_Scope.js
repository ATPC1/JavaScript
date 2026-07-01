let a = 100;
if(true){
    let a = 10;
    var b = 20;
    const c = 30;
    console.log(a); // this is called black scope, this a is only available inside this block
}

// console.log(b); // 20
// console.log(c);
console.log(a);//this is called global scope, this a is available outside the block

function one(){
    const username = "anurag"
    function two()
    {
        const website = "anurag.com"
        console.log(username);
    }
    // console.log(website); // this will give error because website is not available in this scope
    two();
}
// one();

if(true){
    const username = "anurag"
    if(username === "anurag")
    {
        const website = "anurag.com"
        console.log(username+website);

    }
    // console.log(website); // this will give error because website is not available in this scope

}
// console.log(username); // this will give error because username is not available in this scope
//*****************************************interesting****************************** */

function addone(num)
{
    return num + 1;
}
addone(5); // 6 

const addtwo = function(num)
{
    return num + 2;
}
addtwo(5); // 7