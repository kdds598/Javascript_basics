//variable scope

//let =variable are limited to block scope {}
//var =variables are limited to a function(){}


//this will give uncaught error because a is 
//defined by let and it can not be accessed 
//outside block

// for(let i=0;i<5;i++){


// }
// console.log(i)

//2nd example

//this will give reference error because 
//var can be accessed out ouf block{} 
//but not out of function

// dos();

// function dos(){

//   for(var i=0;i<5;i++){}


// }console.log(i)

//3rd example
//use let to declare global variable outside scope 
//but dont use var for it
//it will change browser's window properties 


//for eg
//if i use
var name="bro"
//it will change window property of
//name="" to name="bro"
// we can check it by typing window in console