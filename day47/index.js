//static = belongs to the class,not the objects
//         properties : useful for cache , fixed configuration
//         methods : useful for utility functions


class car{
   numberOfcars=0

   constructor(model){
    this.model=model;
    console.log("model :",this.model)
    this.numberOfcars+=1;
   }
      startrace()
      {
        console.log("3..2..1..go!!")
      }
} 

const car1=new car("corvette")
const car2=new car("Aston martin")
const car3=new car("volvo")
car1.startrace();



//static    static properties always called by class name not object 
//          they are not related to objects but to class

class bike{

  static numberOfbike=0
 
    constructor(model){
     this.model=model;
     console.log("model :",this.model)
      bike.numberOfbike+=1;
    }
     static  startrace()
       {
         console.log("3..2..1..go!!")
       }
 } 
 
 const bike1=new bike("RX 100")
 const bike2=new bike("Raj doot")
 const bike3=new bike("Classic 350")
console.log("no. of bike :",bike.numberOfbike)
bike.startrace();
 
 
