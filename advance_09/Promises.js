// Promises Concept :

// Promise is an object that represents the eventual completion (or failure) 
// of an asynchronous operation and its resulting value


// Used for  DB calls, Cryptography, network   etc....

const Promise_1 = new Promise(function (resolve, rejection) {
    setTimeout(() => {
        console.log('A task is compelete');
    }, 1000);
    resolve()  // use for adding managing the flow of asynchronous operation
})

Promise_1.then(function () {
    console.log(" promise consumed");
})