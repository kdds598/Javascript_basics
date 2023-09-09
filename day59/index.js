// synchronous code = In an ordered sequence 
//                    step by step linear instrucytions
//                    (start now,finish now)


//example

console.log("Start")
console.log("mid")
console.log("end")


//asynchronous code = out of sequence 
//                   Ex. - Access a database
//                   Fetch a file
//                   (start now,finish sometime later)

console.log("start");
setTimeout(()=>console.log("message"),5000)  //this line of code is assynchronous
console.log("end")

