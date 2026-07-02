// use of this method is to create a new scope and avoid polluting the global namespace. 
// It is often used to encapsulate code and create private variables and functions.
(function myFunction() {
    console.log("Namaste jii");
    
})();

((name)=>{
    console.log(`Namaste jii 2 ${name}`);
})("Anurag");