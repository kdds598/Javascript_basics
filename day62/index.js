//async = makes a function return a promise
//but instead of using promise object with then() we use 
// function name of async function dot then()


async function isFileLoaded(){

let fileLoaded=true;

    
if(fileLoaded)
{
    return "File is loaded" //if asyn func is successfull it will return a value
                            //so we are returning a value 
}

else{
    throw "File is not loaded"  //if it was unsuccessful it will throw an error \
                                // that's why we using throw keyword
}


}


isFileLoaded().then(value=>console.log(value)).catch(error=>console.log(error));

//another which is more syntactically right and
//descriptive

 function LoadFile(){

    let fileLoaded=true;
    
        
    if(fileLoaded)
    {
        return Promise.resolve("File is loaded")
    }
    
    else{
        throw Promise.reject("File is not loaded")   
    }
    
    
    }
    
    
LoadFile().then(value=>console.log(value))
    .catch(error=>console.log(error));
    