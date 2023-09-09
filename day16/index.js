//exampe of switch
let grade=window.prompt("Enter grade :");



  switch(grade){
  
    case 'A':
      console.log("you did great");
      document.getElementById("h").innerHTML="you did great";
      break;
    case 'B':
        console.log("you did good");
        document.getElementById("h").innerHTML="you did good";
        break;
    case 'C':
          console.log("you did okay");
          document.getElementById("h").innerHTML="you did okay";
          break;
    case 'D':
            console.log("you passed bearly");
            document.getElementById("h").innerHTML="you passed bearly";
            break;

     case 'F':
              console.log("you failed");
              document.getElementById("h").innerHTML="you failed";
              break;
    default:
    
        console.log("Invalid input");
        document.getElementById("h").innerHTML="Invalid input";

 



  }


  //another way is write true of false in switch()
  //and give comparision in case 
  //like
  // a>=90
  //if the ciondition true then it will select that case 