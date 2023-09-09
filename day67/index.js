//  DOM TRAVERSEL TECHNIQUES


// .firstElementChild
// .lastElementChild
// .parentElemnet
// .nextElementSibling
// .previousElementSibling
// .children[]
// .Array.from(.children)








let a=document.body;

let child1 = a.firstElementChild;

console.log(child1)

child1.style.backgroundColor="red"



let child4 = a.lastElementChild;

console.log(child4)

child4.style.backgroundColor="red"

let element = document.querySelector("#vegetables");

let parent = element.parentElement;

parent.style.backgroundColor="skyblue"



let thrirdchild=element.nextElementSibling;
thrirdchild.style.backgroundColor="pink"


let firstchild=element.previousElementSibling;
firstchild.style.backgroundColor="pink"


firstchild.children[1].style.backgroundColor="green"

let childrenofveggies =Array.from(element.children)

childrenofveggies.forEach(child => {

    child.style.backgroundColor="white"
    
});
