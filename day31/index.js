


document.getElementById("b1").onclick=function(){
  let input=document.getElementById('input').value;
  console.log("input="+input)

  let ans= input*9/5+32;
  ans=ans.toLocaleString(undefined,{style:"unit",unit:"fahrenheit"})
    document.getElementById("result2").innerHTML="This equals to "+ans+" Fahrenhiet"; 
    console.log("result="+ans);

}

document.getElementById("b2").onclick=function(){
  let input=document.getElementById('input').value;
  console.log("input="+input);

   let ans=(input-32)*(5/9);
  ans=ans.toLocaleString(undefined,{style: "unit", unit: "celsius"})
    document.getElementById("result").innerHTML="This equals to "+ans+" Celcius";
    console.log("result="+ans);

}






