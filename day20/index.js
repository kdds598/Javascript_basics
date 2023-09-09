//do while loop  -  do something
//                  then check the condition
//                  repeat if condition is true

let username;
do{

  username=window.prompt("Enter username :")

}while(username=="")

console.log(username)
document.getElementById("h").innerHTML=username;
