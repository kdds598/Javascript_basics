//sufflinng array element 

let cards=["A","2","3","4","5","6","7","8","9","10","j","k","q"]

console.log(cards)

shuffle(cards)

console.log(cards)



function shuffle(array){

   let currentindex= array.length-1;

   while(currentindex>=0)
   {

       let randomindex=Math.floor(Math.random()*array.length)
       
       let t=array[currentindex]
       array[currentindex]=array[randomindex]
       array[randomindex]=t
        currentindex-=1


   }




}