// .addEventListener(event,function,useCapture)
//  you can add many handlers to one element.
//  Even the same event that invokes different functions

// if both elements are waiting for the same event
// what will be handled first willn be decided by useCapture

// in example we have used two overlappinf divs to explain that 

const innerdiv=document.getElementById("innerdiv")
const outerdiv=document.getElementById("outerdiv")


// innerdiv.addEventListener("mouseover",changeorange)
// innerdiv.addEventListener("mouseout",changegreen)


// function changegreen()
// {
//     innerdiv.style.backgroundColor="green"
// }



//in this onclicking inner div element we also clicking 
//outerdiv at the same time
//so it is also changing color



innerdiv.addEventListener("click",changeorange)
outerdiv.addEventListener("click",changeorange,true)  //so to handle outer 
//div first we giving true in its useCapture
// instead of outerdiv.addEventListener("click",changeorange)


function changeorange()
{    alert(`you selected ${this.id}`)
    this.style.backgroundColor="orange";
}


