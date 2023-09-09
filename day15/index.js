//exampe of if with checked property for radio

let visa=document.getElementById("visa")
let MatserCard=document.getElementById("MatserCard")
let Paypal=document.getElementById("Paypal")

document.getElementById("b").onclick=function(){

  if(visa.checked){
  
    console.log("you paid with visa");
    document.getElementById("h").innerHTML="you paid with visa";
  
  }
  else if(MatserCard.checked){
    console.log("you paid with MasterCard");
    document.getElementById("h").innerHTML="you paid with MasterCard";
  
  
  }

  else if(Paypal.checked){
    console.log("you paid with Paypal");
    document.getElementById("h").innerHTML="you paid with Paypal";
  
  
  }
  else{
    console.log("you haven't selected any option ");
    document.getElementById("h").innerHTML="you haven't selected any option";
  }
    
  }