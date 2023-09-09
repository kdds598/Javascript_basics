//window = interface used to talk to the web browser 
//          theDOM is a property of the window


// console.log(window);
// console.log(window.innerWidth);
// console.log(window.innerHeight);


// console.log(window.scrollX)
// console.log(window.scrollY)


// console.log(window.location.href)
// // window.location.href="https://google.com"
// console.log(window.location.hostname)
// console.log(window.location.pathname)

let boo=document.getElementById("b")

// boo.addEventListener("click",()=>{window.close()});
// boo.addEventListener("click",()=>{window.open(/* enter url here*/"https://google.com")});
boo.addEventListener("click",()=>{window.print()}); //print th page


//popups
// window.alert("hello")
// window.confirm("Press okk")
//let age=window.prompt("enter age:")