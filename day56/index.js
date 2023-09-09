//setInterval() = invokes a function repeatedly after a No. of milliseconds
//  its a asynchronous func(doesnt pause execution of your program)


let count=0;

let max=prompt("count up to what :")


let timer=setInterval(countup,1000)  //timer stores id of this setinterval
             //which can be later used to clearinterval


function countup()
{

  count+=1
  alert(`count is ${count}`)
  console.log(count)
  if(count>=max)
  {
    clearInterval(timer)
  }


}