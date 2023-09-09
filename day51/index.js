// how to pass objects objects to a function as a argument

class Car{

    constructor(model, year, color){
    
    this.model =model;
    
    this.year= year;
    
    this.color =color;
    
    
    
    }
    
    }
    
    const carl= new Car("Mustang", 2023, "red",);
    
    const car2 = new Car("Corvette", 2024, "blue"); 
    const car3 = new Car("Lambo", 2022, "yellow",);
    
    displayInfo(car3);
    changecolor(car3,"orange")


    function displayInfo(car){
    
    console.log(car.model);
    
    console.log(car.year);
     console.log(car.color);
    }

    function changecolor(car,color){
    
        console.log(car.model);
        
        console.log(car.year);
        car.color=color
         console.log(car.color);
        }