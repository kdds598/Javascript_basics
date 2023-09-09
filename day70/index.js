//Events

const element = document.getElementById("mybutton")
element.onclick = doSomething;   //it will happen 
                                 //when someone click the button
                                 //onlick event

function doSomething(){
    alert("you did something")
}

element.onload=( alert("this is loaded") )  // this will happen when that element
                        //that is button will load on screen

//we can also do the same in html 
//by using these events as attributes in html tags like this
//
//     <button onclick="dosomething">


const mytextbox = document.getElementById("mytextbox")

mytextbox.onchange=textAction

function textAction(){
    alert("you Entered something")
}



// div tag

const myd = document.getElementById("mydiv")
myd.onmouseover = changecolor;  //this perform changecolor function 
                                //when i hover my cursor over this div tag
myd.onmouseout=(myd.style.backgroundColor="green")  //this work when cursor is out of div
myd.onmousedown=(myd.style.backgroundColor="green") 
function changecolor()
{
    myd.style.backgroundColor="orange"
}

