//setTimout()= invokes a function after a no. of miliseconds
//            asynchronous function(doesnt pause execution)






//3000 milisecond means 3 sec
let timer1 =setTimeout(firstmsg,3000)  //if a function has argument then pass it after millisecond
let timer2 =setTimeout(secondmsg,7000) 
let timer3 =setTimeout(thirdmsg,15000) 

function firstmsg()
{
  window.alert("buy this course $500")

}
function secondmsg()
{
  window.alert("its not a  scam")

}
function thirdmsg()
{
  window.alert("do ittt!!!")

}


document.getElementById("b").onclick=function()
{
  alert("thanks for buying")
  clearTimeout(timer1)  //it will clear or remove the timeout
  clearTimeout(timer2)

  clearTimeout(timer3)


}