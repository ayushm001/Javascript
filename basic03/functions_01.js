

function Myname() {
    console.log("A");
    console.log("Y");
    console.log("U");
    console.log("S");
    console.log("H");
    console.log("M");
    console.log("A");
    console.log("N");
}
 Myname()       //   The " () " refers to execute the function. But te simple Function can represent to function's reference 

 
 //--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


function Add_Two_Numberes (number1, number2){
    console.log(number1 + number2);
}
Add_Two_Numberes (5, 2)  
Add_Two_Numberes (5, "a")          

 // here,  "Add_Two_Numberes (number1, number2)" this is called Parameters (when u creates the functions defination )
 // here, "Add_Two_Numberes (5, 2)" this is called Arguments (calling the value, and passes te values )


const result = Add_Two_Numberes (2, 3)
console.log( "Result :",  result);  // here te result will be undefined. the reasion behind it is we use "console.log(number1 + number2);" insted of "return number1 + number2;" . where console only optimize its consle vali=ue but return works differently

//  the corect reult will  be as Return --->

function addTWO_numbers (Number_1, Number_2) {
    return Number_1 + Number_2 
}

const RESULTS = addTWO_numbers (2, 3)
console.log("Results  :", RESULTS);   // here the result wil be print as "Results  : 5". the reasion behind is we use " return Number_1 + Number_2 "


//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
