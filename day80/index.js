
//rockn paper scissors

let playerText = document.querySelector("#playerText");
let computerText = document.querySelector("#computerText");
let resultText = document.querySelector("#resultText");
let choiceBtn = document.querySelectorAll(".choiceBtn");
let Player;
let Computer;
let Result;

choiceBtn.forEach(button => button.addEventListener("click",()=>
{

    Player = button.textContent;
    computerTURN();
    Result = checkWinner();

    playerText.textContent = `Player :${Player}`
    computerText.textContent = `Computer :${Computer}`
    resultText.textContent = `Result :${Result}`



})
);

function computerTURN()
{

   let cChoice = Math.floor(Math.random()*3)+1;

  switch(cChoice){

    case 1: Computer = "Rock";
        break;
    case 2: Computer = "Paper";
        break;
    case 3: Computer = "Scissors";
        break;
    

  }


}

function checkWinner()
{
   if(Player == Computer){

    return "draw";
   }

   if(Player == "Rock")
   {
    return (Computer == "Paper")? "you Lose!" : "You win!";
   }

   else if(Player == "Paper")
   {
    return (Computer == "Scissors")? "you Lose!" : "You win!";
   }

   if(Player == "Scissors")
   {
    return (Computer == "Rock")? "you Lose!" : "You win!";
   }



}