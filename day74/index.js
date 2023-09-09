//simple animation usingb js

//1st animation ///////////////////////////////////////////////////

let mybutton =document.getElementById("b");
let mydiv =document.getElementById("mydiv");


// mybutton.addEventListener("click",begin)

// function begin(){
    
//     let timerid=null;
//     let x=0
//     let y=0;

//     timerid = setInterval(frame,5);

//     function frame(){
            
//         if(x >=200 || y>=200){

//             clearTimeout(timerid)
//         }
//         else
//         {
//             x+=1;
//             y+=1;
//             mydiv.style.left = x +"px";
//             mydiv.style.top = y +"px";
//         }



//     }


// }



//2nd animation////////////////////////////////////////////



// mybutton.addEventListener("click",begin)

// function begin(){
    
//     let timerid=null;
//     let degree=0
    

//     timerid = setInterval(frame,5);

//     function frame(){
            
//         if(degree>=360){

//             clearTimeout(timerid)
//         }
//         else
//         {
//             degree+=1
//             mydiv.style.transform = "rotateX("+degree+"deg)"; //this will rotate div around x axis
//             // mydiv.style.transform = "rotateY("+degree+"deg)";
//             // mydiv.style.transform = "rotateZ("+degree+"deg)";
//         }



//     }


// }


//3rd animation//////////////////////////////////////////////////////////

// mybutton.addEventListener("click",begin)

// function begin(){
    
//     let timerid=null;
//     let x=0
//     let y=0;
//     let degree=0


//     timerid = setInterval(frame,5);

//     function frame(){
            
//         if(x >=200 || y>=200){

//             clearTimeout(timerid)
//         }
//         else
//         {   degree+=4.05
//             x+=1;
//             y+=1;
//             mydiv.style.left = x +"px";
//             mydiv.style.top = y +"px";
//             mydiv.style.transform="rotateZ("+degree+"deg)"      
        
//         }



//     }


// }


//4th animation using size//////////////////////////


mybutton.addEventListener("click",begin)

function begin(){
    
    let timerid=null;
    let scaleX=1;
    let scaleY=1;


    timerid = setInterval(frame,5);

    function frame(){
            
        if(scaleX>=2 ||scaleY>=2){

            clearTimeout(timerid)
        }
        else
        {     
            scaleX+=0.01
            scaleY+=0.01
            
            mydiv.style.transform="scale("+scaleX+","+scaleY+")"      
        
        }



    }


}


