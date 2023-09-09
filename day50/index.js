//get (getters)= binds an object property to a function
//                 when that property is accessed


//set(setters) = binds an object property to a function
//             when that property is assigned a value

class Car{
    constructor(power,gas)
    {
        this._gas=gas;
        this._power=power;
    }

    get power(){
        return `${this._power}hp`
    }

    get gas(){
        return `${this._gas}L`
    }

    set gas(value)
    {
         this._gas=value;
    }
}

let car=new Car(400,25);

car.gas=67
console.log(car.power)
console.log(car.gas)
