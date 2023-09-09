//template literals =delimited with(`)
//                   instead of double or single quotes
//                   allows embedded variables and expressions

//using ${}
//and string `` insted of ""

//example1
let userName = "Bro";

 items =3
let total=75


//console.log("Hello", userName);
//console.log("You have", items, "items in your cart"); //console.log("Your total is, total);
//console.log("your total is $",total)

//console.log('Hello ${userName));
//console.log(You have $(items) items in your cart");
 //console.log('Your total is $$(total));


 //or we write like
let text =` Hello ${userName}
you have ${items} in your bag your total is $${total}`;
console.log(text)


document.getElementById("h").innerHTML=text;