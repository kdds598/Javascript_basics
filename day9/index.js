//functions of string class
let a="  oabc dhbhdo   "

//a.trim() to remove unecessary satarting and last space

console.log(a.length)
console.log(a.charAt(3))
console.log(a.indexOf("o")) //show index of 1st occurenece of a

console.log(a.lastIndexOf("o"))
console.log(a.length)
console.log(a.trim())
a=a.toLocaleUpperCase();//converts all to uppercase
console.log(a) 
a=a.toLocaleLowerCase();

console.log(a) 
let phoneno="123-7787-676"
phoneno=phoneno.replace("-","/"); 
console.log(phoneno) 

//it replace the first ocuurnce of - to 
//we can also use replaceall where all its occurenec is replaced
phoneno=phoneno.replaceAll("-","/"); 

console.log(phoneno) 




