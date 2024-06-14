// for  of :--

//  *  It is Array specific loop.


//structure of For-of -- 
// for (const iterator of object) {
    
// }         

//  NOTE ---------
//element is a variable that represents the current element being processed in the iterable.
//iterable is the object you want to iterate over (such as an array, string, map, set, etc.).

//  objects , array and strings are iterator ( we can use loops )

const arr = [1, 2, 3, 4, 5, 6]

for (const val of arr) {
    console.log(val);
}      // in array 

const call = "Hey Wasim !"
for (const msg of call) {
    // if (msg == ' ') {
    //     continue
    //    }                // to remove the spaces 
    // console.log(call);
    console.log(`each charecter is  : ${msg}`);
   
}