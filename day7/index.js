let count=0;




document.getElementById("decbtn").onclick=function(){
 count-=1;

  document.getElementById("labelcount").innerHTML=count;

}


document.getElementById("resbtn").onclick=function(){

  count=0;
  document.getElementById("labelcount").innerHTML=count;

}


document.getElementById("incbtn").onclick=function(){

  count+=1
  document.getElementById("labelcount").innerHTML=count;

}


