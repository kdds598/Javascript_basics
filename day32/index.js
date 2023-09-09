//array

let fruits=["apple","orange"]
console.log(typeof gg)

fruits.push("lemon")      //add element at last
console.log(fruits)
            fruits.pop()                //remove element from beg
fruits.unshift("mango")   //add element at beg
console.log(fruits)

fruits.shift()            //remove element from beg
console.log(fruits)

let length=fruits.length;
console.log(length)

let index=fruits.indexOf("apple")
console.log(index)

for(let i=0;i<length;i++)
{
  console.log(fruits[i],end=" ")

}

//for up statement to iterate over array

for(let i of fruits)
{
  console.log(i)

}

fruits=fruits.sort()   //to sort
console.log(fruits)

fruits=fruits.sort().reverse()  //to sort in reverse order
console.log(fruits)


//2 d array
//arry 3=[array1,array2,array3]

let car=["volvo","bmw","lamborghini","rr"]
let bike=["royal enfield","bajaj","yamaha","honda","harley davidson"]
let truck=["mercedes","tata","volvo"]

let automobiles=[car,bike,truck]

for(let automobile of automobiles)
{
  for(let item of automobile)
  {
    console.log(item)
  }
}

automobiles[0][3]="rolls"


for(let automobile of automobiles)
{
  for(let item of automobile)
  {
    console.log(item)
  }
}






