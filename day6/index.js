
document.getElementById("b").onclick=function(){

  let a,b,c;
  a=document.getElementById("s1").value;
  console.log("side1 is ",a)
  b=document.getElementById("s2").value;
  console.log("side2 is ",b)
  c=Math.pow(a,2)+Math.pow(b,2)
  let hyp
  hyp=Math.sqrt(c)
  console.log("hypo is ",hyp)
  


  document.getElementById("ans").innerHTML="hypotenous is "+hyp;


}


