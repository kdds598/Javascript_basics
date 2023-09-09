//spread operator(...)= allows an iterable such as array or string to be 
//                  expanded in places where zero or more arguments 
//                  are expected 
//                  unpacks the elements


let numbers=[1,2,3,4,6]
let max=Math.max(numbers);    //it will print NaN
console.log(max)    

//to fix it we use spread operator which spread the elements 
//in iterables like we are giving separate value one by one

let m=Math.max(...numbers); 
console.log(m)    

let class1=["spongebob","patrick","sansdy"]
let class2=["squidward","mr. krabs","plankton"]

// if we do like this
//class1.push(class2)
//so it will add whole class2 array as an element in class 1 array
//to add elements of class2 array in class1 array 
//we use spread operator

class1.push(...class2)
console.log(class1)