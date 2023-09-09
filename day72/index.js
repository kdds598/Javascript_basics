// how to show and hide HTML element

const mybutton=document.getElementById("b")
const myimg=document.querySelector("#myimg")


mybutton.addEventListener("click",()=>{

    if(myimg.style.display =="none"){
        myimg.style.display="block"
    }

  else{
        myimg.style.display="none"
    }

})


//another way by using visibility property 
//in which img will be there but invisible
//means area will be reserve for img
//and content wiil be at their original place



// mybutton.addEventListener("click",()=>{

//     if(myimg.style.visibility =="hidden"){
//         myimg.style.visibility="visible"
//     }

//   else{
//         myimg.style.visibility="hidden"
//     }

// })

//and have to set img style="visibility:hidden;" in html file