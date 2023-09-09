
//super =refers to parent class
//commmonly used to invoke constructor of parent class

class Animal{
    constructor(name,age){
          this.name=name
          this.age=age
          console.log(name)
          console.log(age)


    }
 }

 class Bear extends Animal{
    constructor(name,age,runspeed)
    {
     super(name,age)
     this.runspeed=runspeed
     console.log(runspeed)
 
    }
    
 }

 class Fish extends Animal{
    constructor(name,age,swimspeed)
    {
     super(name,age)
     this.swimspeed=swimspeed
     console.log(swimspeed)
 
    }
 }

 class Hawk extends Animal{
    constructor(name,age,flyspeed)
    {
     super(name,age)
     this.flyspeed=flyspeed
     console.log(flyspeed)
 
    }
 }

 const bear=new Bear("bear",8,30);
 const fish=new Fish("fish",1,70);
 const hawk=new Hawk("hawk",8,150);
