//class = a bluprint for creating objects
//        defiine what properties and method they have use a constructor
// for uniques properties


class player
{
   score=0;
   pause(){
    console.log("you pause the game")
   }

   exit(){
    console.log("you quit the game")
   }



}

const player1=new player();
const player2=new player();
const player3=new player();
const player4=new player();

player2.score=3

console.log(player1.score)
console.log(player2.score)
player2.pause();
player3.exit();

//constructor


class student
{
     constructor(name,age,gpa){
            this.name=name
            this.age=age
            this.gpa=gpa
            
            console.log("your name",this.name)
            console.log("your age",this.age)
            console.log("your gpa",this.gpa)

     }

     study(){
        console.log("student is studying")
     }
}

let student1=new student("rishi",18,8,8.16)
student1.study();



