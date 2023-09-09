//ternary operator 

//condition ? expr if true :expr if false
let age=window.prompt("age:")
let adult=checkage(age);
console.log(adult)

function checkage(age){

  return age>=18 ? true :false;
}

////2nd program

checkWinner(false);

function checkWinner(win)
{
   win ? console.log('you won '):console.log('you lose')
}