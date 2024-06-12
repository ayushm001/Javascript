// truthy and falsy values :-
//    used to describe how different values are evaluated in a boolean context, 
//    such as conditions in if statements. 


const UserName = "Ayushman "

if (UserName) {                  // here condition is not applied - if (UserName) 
    console.log(UserName, "valid user name ");
} else {
    console.log(UserName, "invalid user name ");
}



let user_access = 0

if (user_access) {
    console.log("eligible");
} else {
    console.log("not eligible");
}


//  Falsy  values :-
//    false, 0, -0, BigInt, 0n, "", null, undefined, NaN


//  Truthy values :-
//    "0", 'false', " ", [], {}, function(){}


// ------------------------------------------------------

const name = []

if (name.length === 0){                    // check the array ( .length === 0)
    console.log("is an empity array");
} else{
    console.log("not an empity array");
}


var EmptyObj ={}

if (Object.keys(EmptyObj).length === 0) {
    console.log("object is empity");
}

// here ' Object.keys(EmptyObj) '-  returns an array. that will help to detect 


// --------  Nullish Coalescing Operator ( ?? )   :  used for null, undefined
//  This operator is particularly useful when you want to handle default values for potentially undefined or null variables,
//  without mistakenly treating other falsy values like 0, false, or an empty string as undefined.


let val1;
// val1 = 5 ?? 10
// val1 = false ?? 3
// val1= null ?? 34         print 34  
// val1 = undefined ?? 9    print 9

console.log( val1);

// this operator generaly used to handle the code structure. 




//  --------  Terniary Operator 

// condition ?  true :  false

const book_price = 250
book_price > 300 ? console.log(" greater than 300") : console.log(" less than 300");