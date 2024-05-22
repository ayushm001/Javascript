

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
//console.log("Results  :", RESULTS);   // here the result wil be print as "Results  : 5". the reason behind is we use " return Number_1 + Number_2 "

// WE NEED TO UNDERSTAND THAT CONSOLE AND RETURN ARE COMPLETLY 2 DIFFERENT THINGS


//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

function Loggin_user_message (user_name){
    return`${user_name} just logged in ` 
 }

 Loggin_user_message("Ayushman")
// console.log( Loggin_user_message("Ayushman"))

//  -------------------> (if , else statment) 

function Logged_in (username) {
    if (undefined) {
        console.log("please enter a username ");
        return 0
    }
    return`${username} just logged in `   
}
Logged_in ("Ayushman000")
console.log(Logged_in ());

// -------------------------------------------------------------------------------------------------

function Loggin_user_message (user_name){
    return`${user_name} just logged in ` 
 }

 Loggin_user_message("Ayushman")
// console.log( Loggin_user_message())

//  -------------------> (if statment) 

function loggin_user_name (username) {
    if(username === undefined) {
        console.log("Please enter a user name ");
        return
    }
    return`${username } just logged  in `
}
// console.log(loggin_user_name("ayush"))

// ---------------> (OTHERWISE IN PROFFESIONAL WAY)

function Logged_in_USER (username= "vinod") {
    if(!username) {
        console.log("Please Enter a username  ");
        return
    }
    return `${username} just logged in `
}
console.log(Logged_in_USER("ayushmann"));
console.log(Logged_in_USER());          // inn here if we didn't take aany value then it will be print as By default "vinod". thhe reasion is in we take "function Logged_in_USER (username= "vinod")"


// -----------   (Function with object)  --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

function calculate_cart_price (value) {
    return  value
}
//console.log(calculate_cart_price(15)); 
// console.log(calculate_cart_price(15));


// console.log(calculate_cart_price(15, 12, 64, 40));

function calculate_cart_price_2 ( ...value) {                    //(...)- is  known as rest operator. where it helps to sotres the spread values(30, 48, 90, 86) into a arrays
    return  value
}
//console.log(calculate_cart_price_2(30, 48, 90, 86))

// ------------- EX2----------->
function calculate_cart_price_2 ( num1, num2, ...value) {  
    return  value
}
//console.log(calculate_cart_price_2(233, 544, 909, 567))       // Here the  o/p will be "[ 909, 567 ]". the reason behind  it ( num1, num2, ...value) . whhere te 233, 544 will assign in num1 and num2


// ------------------------------------------------------->

const user = {
    user_name : "Akhram",
    user_ID : 101,
    address : "bihar"
}
function handleobject(UserInfo) {
    console.log(`User name is ${UserInfo.user_name} ID is ${UserInfo.user_ID} address  is ${UserInfo.address}`)
}

// handleobject(user)  // to delever the result  
// ---------------------------------otherwise------>
handleobject ({
    user_name : "Ayushman",
    user_ID : 90
})

// --------------------------------------  ARRAY  ------------------------------->

const myNewArray = [100, 393, 900, 878, 500]

function returnValue(myNewArray){
    return myNewArray[2]

}
console.log(returnValue(myNewArray));
// ----------------> otherwise 
console.log(returnValue([2332, 322, 434, 555, 657]));
