//error handling =object with a description of something went wrong


//throw = execute a user defined error
//finally always rub

try{

    let x= window.prompt("enter a no.")
    x=Number(x);

    if(isNaN(x)){
        throw "its not a no."
    }

    if(x==""){
        throw "its empty"
    }


}
catch(error)
{
   console.log(error)
}
finally{
   
    console.log("this runs always")
}





try{

    
    console.lg(x)
}
catch(error)
{
   console.log(error)
}