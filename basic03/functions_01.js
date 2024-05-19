

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
 // here, "Add_Two_Numberes (5, 2)" this is called Arguments (calling the value, and passes the values )


const result = Add_Two_Numberes (2, 3)
console.log( "Result :",  result);  // here te result will be undefined. the reason behind it is we use "console.log(number1 + number2);" insted of "return number1 + number2;" . where console only optimize value but return works differently

//  the correct result will  be as Return --->

function addTWO_numbers (Number_1, Number_2) {
    return Number_1 + Number_2 
    //console.log( Ayushman );    // IT IS A UNREACHABLE CODE .
}
// THE REASON BEHIND THE UNREACHBLE CCODE IS :--> statement, the code in the function after the return statement will not be executed. This is because the return statement immediately exits the function, returning the specified value and terminating the function's execution.

const RESULTS = addTWO_numbers (2, 3)
console.log("Results  :", RESULTS);   // here the result wil be print as "Results  : 5". the reason behind is we use " return Number_1 + Number_2 "

// WE NEED TO UNDERSTAND THAT CONSOLE AND RETURN ARE COMPLETLY 2 DIFFERENT THINGS


//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

 function Loggin_user_message (user_name){
    return`${user_name} just logged in ` 
 }

 Loggin_user_message("Ayushan")
 console.log(Loggin_user_message);
