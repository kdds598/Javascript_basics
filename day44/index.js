//Map =object that hold key value pair

let store=new Map([
["t-shirt",20],
["underwear",50],
["socks",10],
["jeans",30],

])


console.log(store.get("t-shirt"))

store.delete("underwear")
console.log(store.has("jeans"))
store.set("hat",60)

console.log(store.size)

store.forEach((value,key)=> console.log(`${key} $${value}`))

