


let guess=1

document.getElementById("b").onclick=function(){
  let input=document.getElementById('n').value;
  console.log(input)

  let x=Math.floor(Math.random()*10+1);

  if(input == x)
  {
    document.getElementById("result").innerHTML="You guessed it Right !! it took you "+guess+" guesses" 

  }

  else{
    document.getElementById("result").innerHTML="wrong guess!! " + "ans is "+x;

  }
  guess+=1

}



