//array.reduce()= reduces an array to a single value




let prices=[22,11,3,34,4,5,66,19]

let total=prices.reduce(checkout)

console.log(`your total is $${total}`)


function checkout(total,element){

    return element+total
}

