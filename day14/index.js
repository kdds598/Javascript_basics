//exampe of if with checked property for checkbox

document.getElementById("b").onclick=function(){

if(document.getElementById("myck").checked){

  console.log("you are subscribed");
  document.getElementById("h").innerHTML="you are subscribed";

}
else{
  console.log("you are not subscribed");
  document.getElementById("h").innerHTML="you are not subscribed";


}
  
}