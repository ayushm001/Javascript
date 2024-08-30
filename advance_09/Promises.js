// Promises Concept :

// Promise is an object that represents the eventual completion (or failure) 
// of an asynchronous operation and its resulting value


// Used for  DB calls, Cryptography, network   etc....

//  NOTE:  promises are used for parallel actions 


const Promise_1 = new Promise(function (resolve, rejection) {
    setTimeout(() => {
        console.log('A task is compelete');
    }, 1000);
    resolve()  //had a connection with .then(). use for adding managing the flow of asynchronous operation
})

Promise_1.then(function () {
    console.log(" promise consumed");
})

// CODE RESULT - 
// The resolve function is called immediately, so 'promise consumed' is logged first.
// After 1 second, the setTimeout callback logs 'A task is complete'.

// resolve() refers to .then
// rejection() refers to .catch


// IMP__NOTE: 

// CASE__1 
//            if we calls the resolve() INSIDE the setTimeout()-function then after the timeout  
//            it calls the resolve(), after that .then will be carried its next

// CASE__2 
//            if we calls the resolve() OUTSIDE of the setTimeout()-function then immeditely 
//            it calls the resolve() which is linked with .then . After that setTimeout() will be call



new Promise(function(resolve, rejection){
    setTimeout(() => {
        console.log('task 2 is complete');
        resolve();
    }, 2000);

}).then(function(){
    console.log('task 2 resolved');
})

const promise_3 = new Promise(function(resolve, rejection){
    setTimeout(()=>{
        resolve({user_name : " PERSON ", email: "person@example.com"})
    }, 3000)
})

promise_3.then(function(user){
    console.log(user);
})
