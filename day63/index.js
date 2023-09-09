//await = makes an async function for a promise

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
    
    // In this Example instead of 
    //doing this :--  isFileLoaded().then(value=>console.log(value)).catch(error=>console.log(error));
    
    //we can use
    //but we must use await in another async function 
    //and then call it





    // async function StartProcess()
    // {                                             //but if async faild
    //                                               //or any error occured
    //         let message=await isFileLoaded();     //so it cant catch it therefore

    //         console.log(message);                 //we have to put it in try 

    // }                                             //and use catch after it

    // StartProcess();






    //just like this

    StartProcess();


    async function StartProcess()
    {                                            
              try{                                    
            let message=await isFileLoaded();     
            console.log(message);                 

                  }
            catch(error)
            {
                console.log(error);
            }
                
                
      }                                  
