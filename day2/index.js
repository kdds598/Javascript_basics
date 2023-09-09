//how to take user input

//easy way with window prompt

// let uname=window.prompt("enter your name :");
// console.log(uname);

//difficault way by html textbox
let username;
document.getElementById("mybutton").onclick=function(){

 username=document.getElementById("tb").value;
 console.log(username);
 document.getElementById("ml").innerHTML=username;
}