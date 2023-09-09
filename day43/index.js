//nested function 

//if a function is nested in another we cant access it untill we access 
//the function in which it is nested in 

let username="bro"
let inbox=0

login();
function login()
{
    displayname()

    displayinbox()
}

function displayname(){
    console.log("welcome ",username)
}

function displayinbox(){
    console.log("you have",inbox,"messages")
}