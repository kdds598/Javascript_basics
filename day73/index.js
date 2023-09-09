//how we can detect key presses
// it tell to console which key is pressed
//window.addEventListener("keydown",event => console.log(event.key))

const mydiv=document.getElementById("mydiv");

window.addEventListener("keydown",move)

let x=0
let y=0

function move(event){

   switch(event.key){

    case "ArrowDown":
        y+=5
        mydiv.style.top=y+"px";
        break;
 
    case "ArrowUp":
        y-=5
        mydiv.style.top=y+"px";
        break;

    case "ArrowRight":
        x+=5
        mydiv.style.left=x+"px";
        break;

    case "ArrowLeft":
        x-=5
        mydiv.style.left=x+"px";
        break;

    
    default:
        break;
   }

}
