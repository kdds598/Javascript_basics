//object =A group of properties and methos
//         properties=what an object has
//         methods =what an object do
//use . to access a property/methods



let car={
 model:"BMW",
 color:"blue",
 year:2023,

 drive:function(){
 console.log("you drive the  car ",this.model,car.model) 

},
brake:function(){
    console.log("you brake the  car",this.model) 
   
   }
   

}

console.log(car.model)
console.log(car.color)
console.log(car.year)
car.drive()
car.brake()

//this keyword =reference to a particular object
//              the object depends on th immediate context

this.name="mycoolwindow"
//it will change the property of window by name "name" 
//because this keyword refer to window if it is outside of an object


