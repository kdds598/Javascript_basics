//nested loop
let a=window.prompt("enter row:");
let b=window.prompt("enter coloumn:");
let s=window.prompt("enter symbol:");

for(let j=0;j<a;j++)
{
6
    for(let i=0;i<b;i++)
    {
         
       document.getElementById("h").innerHTML+=s;


    }

    document.getElementById("h").innerHTML+="<br></br>";

}