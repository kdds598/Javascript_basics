//getting elements by different methods


let element =document.getElementById("mytitle");
element.style.border="solid"
element.style.backgroundColor="orange"




let fruits = document.getElementsByName("fruits")

console.log(fruits)

console.log(fruits[2])

fruits.forEach( fruit =>{

    if(fruit.checked){
        console.log(fruit.value);
    }
})



let vegetables = document.getElementsByTagName("li");

vegetables[0].style.backgroundColor="orange"



let desserts = document.getElementsByClassName("desserts")

desserts[1].style.backgroundColor="skyblue"

//in this if we are using id dont forgert to proceede it with
//                                    #
//                                    |
//                                    |
//                                    |
let element1= document.querySelector("#mytitle")  //queryselector refers to only one element

element1.style.backgroundColor="Yellow"  //if need all we have to use queryselectorall



//in this if we are using class dont forgert to proceede it with dot
//                                    .
//                                    |
//                                    |
//                                    |
let element2= document.querySelector(".desserts")



element2.style.backgroundColor="purple"


//in this if we are using attribute dont forgert to proceede it with []
//                                    []
//                                    |
//                                    |
let element4= document.querySelectorAll("[for]")


element4.forEach( e =>{

    e.style.backgroundColor="magenta"
})








