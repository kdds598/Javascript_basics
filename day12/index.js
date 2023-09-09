//generating random no.s
//x=Math.floor(Math.random()*6); 
//this will generate random no. from 0 to 5
//but it will be decinmal so we using floor in this

let x,y,z;




document.getElementById("roll").onclick=function(){
   x=Math.floor(Math.random()*6)+1; 
   console.log(x)
   y=Math.floor(Math.random()*6)+1; 
   console.log(x)

   z=Math.floor(Math.random()*6)+1; 
   console.log(x)


  document.getElementById("label1").innerHTML=x;
  document.getElementById("label2").innerHTML=y;
  document.getElementById("label3").innerHTML=z;

}

