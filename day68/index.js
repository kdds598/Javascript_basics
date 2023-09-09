//add or change HTML elements

// .innerHTML (vunerable to xss attacks)
// .textContent (more secure)


// in innerHTML someone can pass malicious script 
// but if we use .textContent it only takes text so it will
//take that script as a text.


const nametag =document.createElement("h1");
nametag.textContent=prompt("Enter your name :")
document.body.append(nametag)  //it is the position where you want to add


//example -- adding element to unorderd list

let mylist=document.querySelector("#fruits")   //getting ul ny id
let listitem=document.createElement("li")  //creating list item
listitem.textContent="Mango"   //adding text to list item
// mylist.append(listitem)        //adding pos where to add
// mylist.prepend(listitem)        //adding pos where to add
mylist.insertBefore(listitem,mylist.getElementsByTagName("li")[0])  //another wayb of pos      //adding pos where to add