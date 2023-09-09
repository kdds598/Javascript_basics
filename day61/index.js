//promise =object that encapsulates the result of an asynchronous operation
//         let asynchronous methods return values like asynchronous methods
//         "I promise to return something in the future"


//          the STATE is 'pending' then 'fulfilled' or 'rejected'
//          the RESULT is what can be returned 
//          2 parts producing and consuming

           //if our asynchronous process 
          //successful we resolve 
         //otherwise we call rejecct process 


         
const promise =new Promise((resolve,reject) => {

    let fileLoaded=false;

    if(fileLoaded){
        resolve("File is loaded")
    }

    else{
        reject("FIle is not loaded");
    }
});    //we have passed arrow function as argument in Promise

promise.then( value => console.log(value)).catch(error => console.log(error));


//catch will generated user defined error if is generated in promise
// or promise failed or any error occured 

//we doent neccessarily needed to give rejecting condition 
//or reject a promise if a promise is rejected it simply do nothing

//Example

const promise1= new Promise( resolve =>{
    setTimeout(resolve,5000)
}
    );
    promise1.then(()=>console.log("Thanks for waiting"));

    //same example by passing argument to the promise 


    
const wait=time => new Promise( resolve =>{
    setTimeout(resolve,time)
}
    );
    wait(3000).then(()=>console.log("Thanks for waiting1"));


    

