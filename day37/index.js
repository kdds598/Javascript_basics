//array.filter()= create a new array with all elements that pass the test 
//provided by a function


let ages=[22,11,3,34,4,5,66,19]

let adults=ages.filter(checkage)

adults.forEach(print)


function checkage(element){

    return element>=18;
}


function print(element){

    console.log(element)
}