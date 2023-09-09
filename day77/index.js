//cookie  = a small text file stored on your computer
//      used to remember information about the user
//      saved in name=value pairs;



// // console.log(navigator.cookieEnabled);  //this checks if cookies are enabled or not

// document.cookie = "firstName=SpongeBob;  expires=sun, 1 january 2030 12:00:00 UTC; path=/";
// document.cookie = "lastname=SquarePants;  expires=sun, 1 january 2030 12:00:00 UTC; path=/";


// //expire cookie by setting expiry date that is before current date

// console.log(document.cookie);



//creating fun to create cookies

function setCookie(name,value,daysToLive){

    const date = new Date();
    date.setTime(date.getTime() + (daysToLive*24 *60* 60* 1000));
    let expires = "expires=" + date.toUTCString();
    document.cookie =`${name}=${value}; ${expires}; path=/`
}



setCookie("email","Sponge@gmailcom",365);
setCookie("email2","patrick@gmailcom",365);
console.log(document.cookie);

console.log(getCookie("email"));



//delete cookie function

function deleteCookie(name){

    setCookie(name,null,null);
}

function getCookie(name){
    const cDecoded = decodeURIComponent(document.cookie);
    const cArray= cDecoded.split("; ");


        cArray.forEach(element =>{
            if(element.indexOf(name)==0){

                    result = element.substring(name.length +2)

            }
        })
        return result;
}


