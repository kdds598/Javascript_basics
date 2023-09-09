//rest parameter (...)= represents an indefinite no. of parametera
//                      (packs arguments into an array)

let a=1
let b=2
let c=3
let d=4
let e=5


console.log(sum(a,b,c,d))

function sum(...numbers)
{
 sum=0

 for(i of numbers)
 {
     sum+=i
 }
return sum
}



