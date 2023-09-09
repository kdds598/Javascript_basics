//if statement

let age=window.prompt("enter age:");


if(age>=18 && age<=64){
  
  document.getElementById("h").innerHTML="You are an adult";

}

else if(age>=64){
  
  document.getElementById("h").innerHTML="You are an senior senior citizen";
  
}



else if(age<18){
  
  document.getElementById("h").innerHTML="You are a child";
  
}
else{
  document.getElementById("h").innerHTML="Invalid input";

}

