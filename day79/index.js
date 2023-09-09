//stopwatch

const timeDisplay = document.querySelector("#timeDisplay");
const startButton = document.querySelector("#startButton");
const pauseButton = document.querySelector("#pauseButton");
const resetButton = document.querySelector("#resetButton");

let startTime = 0;
let elapsedTime = 0;
let currentTime = 0;
let paused = true;
let intervalID;
let hrs = 0;
let mins = 0;
let secs = 0;

console.log((Date.now()));

startButton.addEventListener("click",()=>{
    if(paused == true){
            paused = false;
            startTime=Date.now() - elapsedTime;        //Date.now(); will give current date and time in milliseconds
            intervalID=setInterval(updateTime,1000);
    }




});



pauseButton.addEventListener("click",()=>{
        if(!paused)
        {
            paused = true;
            elapsedTime = Date.now() -startTime; 
            clearInterval(intervalID);
        }

})
 resetButton.addEventListener("click",()=>{
    paused=true;
    clearInterval(intervalID);

 startTime = 0;
 elapsedTime = 0;
 currentTime = 0;
 paused = true;
 hrs = 0;
 mins = 0;
 secs = 0;
timeDisplay.textContent = `00:00:00`


 })
function updateTime()
{
    elapsedTime = Date.now() - startTime;
     secs = Math.floor((elapsedTime/1000)%60);
     mins = Math.floor((elapsedTime/(1000*60))%60);
     hrs = Math.floor((elapsedTime/(1000*60*60))%60);
     secs=pad(secs)
     mins=pad(mins)
     hrs=pad(hrs)
     

     timeDisplay.textContent = `${hrs}:${mins}:${secs}`


     function pad(unit){
        return (("0") + unit).length  > 2 ? unit :"0" + unit;
     }
}

