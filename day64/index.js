//modules 
// The idea behind a module is that it's a file of a resuble
// We can import sections of pre-written code to  use whenever
// Great for any general utility values and functions 
// Helps to make your code more reusable and maintanable
// Think of modules as separate chapters in a book


// for which we have to set another script in Html file
// and have to set main sript type as module because it was the one 
// who act as module and 
//to import something outside of the another file
//we must use it with export keyword


//we importing it in this way

//import { PI,getAreaofCircle,getAreaofRectangle } from "./math_util.js";

// Or if we need to import allwe do it like this






import * as mathy from "./math_util.js";

console.log(mathy.PI)
console.log(mathy.getAreaofCircle(10))

console.log(mathy.getAreaofRectangle(10,33))
