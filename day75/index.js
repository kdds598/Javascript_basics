//Canvas API = a means for drawing graphics
//             used for animations,games,data visualization


let canvas = document.getElementById("mycanvas")

let context = canvas.getContext("2d")

// context.lineWidth = 10;
// context.strokeStyle ="purple"

// context.beginPath();
// context.moveTo(0,0)         //this will work as moving brush on canvas
// // context.lineTo(500,500)
// context.lineTo(250,250)
// context.lineTo(250,500)
// context.stroke();

// context.moveTo(500,0)    
// context.lineTo(250,250)
// context.stroke();

//draw triangle


// context.fillStyle ="yellow";  //to fill color
// context.lineWidth = 5;
// context.beginPath();
// context.moveTo(250,0)  
// context.lineTo(0,250)
// context.moveTo(250,0)  
// context.lineTo(500,250)
// context.moveTo(0,250)  

// context.lineTo(500,250)





// context.stroke();
// context.fill();

//and just like this we can make rectangle and other shapes
// context.fillStyle ="red"
// context.fillRect(0,0,250,250)
// context.strokeStyle = "black"
// context.strokeRect(0,0,250,250)

//draw circle
// (x,y,r,sAngle,eAngle,counterclockwise)


context.fillStyle ="red"


context.beginPath();
context.arc(250,250,100,0,2*Math.PI,true)
context.stroke();
context.fill();

// Draw text
context.font="50px MV Boli"
context.fillStyle ="blue"
context.textAlign ="center"
context.fillText("you you",canvas.width /2,canvas.height /2)




