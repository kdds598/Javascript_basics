//slice() to extract a section of a string
//and returns it as a new string
//without modifying the actual original

let fullname="BRo code"

let firstname,lastname;

//firstname=fullname.slice(0,3);
//lastname=fullname.slice(4) //it will from index 4 to all up to length

//another way by choosing index of any char
//we are char as space " "
//using indexof fun

lastname=fullname.slice(fullname.indexOf(" ")+1);
firstname=fullname.slice(0,fullname.indexOf(" "));


console.log(firstname)

console.log(lastname)

