 //The Date object is used to work with dates and time

 let date0=new Date();
 console.log(date0);
//  date0= date0.toLocaleString();
 console.log(date0);


//if we pass 0 as a argument 
//it will be known as epic or reference point for time
//and if we pass millisecond to  argument
//which tell what date or time we gat after that much milliseconds
//from reference point


let date=new Date(1900000000000);

console.log(date);

//let date1=new Date(2023,0,1,2,3,4,5);
let date1=new Date("january 1,2023,00:00:01");
date= date.toLocaleString();
console.log(date1);


//some more tiime related methods

let year= date0.getFullYear();
let dayofmonth=date0.getDate();  // 7 th day of moth
let dayofweek=date0.getDay();  //sunday 0 and mon 1 and so on
let month=date0.getMonth(); // jan 0 feb 1
//and so many methods
date=date.toLocaleString();
console.log(year)
console.log(dayofmonth)
console.log(dayofweek)


//set date

date.setFullYear(2023);
date.setMonth(11)
//and so on 

