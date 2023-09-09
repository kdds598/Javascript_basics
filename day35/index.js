//callback : a function passed as an argument to another function
// ensure that a function is not going to run before
//a task is completed helps us develop asynchronous code
//(when one function has a wait for aniother function)
//that helps us avoid errors and potential problems 
// ex. wait for a file to load


sum(2,3,displaydom)

function sum(a,b,callback)
{
    let rsult =a+b
    callback(rsult)
}
function displayconsole(output){
    console.log(output)
}
function displaydom(output)
{
    document.getElementById("h").innerHTML=output;
}