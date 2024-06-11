//  refers to the order in which statements are executed
//if



// ===  ->  type checking (data types)
// !==  ->  Strict not equal to
//!=    ->  not equals to


// if (2=="2"){
//     console.log("executed");
// }



// const temprture = 44

// if (temprture < 50){
//     console.log("temprature is less than 50");
// }else{
//     console.log("temprature is greater than 50");
// }



//  scope releted:--

// const score =  400

// if (score > 100) {
//     const power = "fly"                      // (note) if we declar var then it will accept both global & local sscopes . that the result will be both print 33ln. &35ln at a time 
//     console.log(`user power : ${power}`);
// }
// console.log(`user power : ${power}`);        



// const balance = 1000
        //if (balance > 500) console.log("test"),console.log("test 2");   wrong code

// if (balance < 500) {
//     console.log("less than");
// } else if (balance < 600) {
//     console.log("less than 600");
// } else{
//     console.log("less than 1500");
// }


const userLoggedin = true
const debtcard = false         // AND operator

if (userLoggedin && debtcard) {
    console.log("Allow to buy course's");
}



if (userLoggedin || debtcard) {                //OR operator
    console.log("user logged in ");
}