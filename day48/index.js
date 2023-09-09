//inheritence = a child class can inherit all the methods
//              and properties from another class

 class Animal{
    alive=true

    eat(){
        console.log(`this ${this.name} is eating`)
    }
    
    sleep(){
        console.log(`this ${this.name} is sleeping`)
    }

 }

 class Bear extends Animal{
    name="bear"
    run(){
        console.log(`this ${this.name} is running`)
    }
 }

 class Fish extends Animal{
    name="fish"
    swim(){
        console.log(`this ${this.name} is swimming`)
    }
 }

 class Hawk extends Animal{
    name="hawk"
    fly(){
        console.log(`this ${this.name} is flying`)
    }
 }

 const bear=new Bear();
console.log(bear.alive)
bear.eat();
bear.sleep()
bear.run();

//super =refers to parent class
//commmonly used to invoke constructor of parent class
