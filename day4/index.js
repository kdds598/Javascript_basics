//const = var cant be change
//its not necessary but good programmers use const var 
// all capital letter like PI
//let pi=3.14159;
const PI=3.14159;
let radius;
let circumference;

radius=Number(window.prompt("Enter radius :"));
// radius=Number(radius);

circumference=2*PI*radius;
console.log(circumference);
document.getElementById("p").innerHTML="radius of circle is "+circumference;