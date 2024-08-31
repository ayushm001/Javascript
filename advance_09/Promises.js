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



const promis_4 = new Promise(function (resolve, rejection){
    setTimeout(()=>{
        let error = false;
        if(!error){
            resolve({User_name: "PERSON 1", password : 123 })
        }
        else{
            rejection('ERROR : something went wrong ')
        }
    }, 2000)
})
promis_4.then((user)=>{
    console.log(user);
    return user.User_name; // logs the entire user obj
    // this will not return te user name cause .then consoles the whole user object but the return user.user_name is not capture
   //  to display the user_name we need to chain up another .then method to handle it . hhere ids how:-

})
.then((name)=>{
    console.log(name); // logs the only user_name
})
.catch((error)=>{
    console.log(error);
})
.finally(()=>{     // .finally helps to execute piece of code regardless of wether it is fullfield or rejected
    console.log("The promise is either resolved or rejected");  
} )




// Handeling with async and await :


const Promise_5 = new Promise( (resolve, reject ) =>{

    setTimeout(()=>{
        let error = false;
        if(!error){
            resolve({user_id: '2022', name: "alex"})
        } 
        else{
            reject('ERROR: something went wrong')
        }
    }, 3000)
})


async function consumed_promis (){
   
    try {
        const response = await Promise_5
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumed_promis()

// NOTE : Here in async we can use await to pause the execution of the function until a promise is resolved or rejected.

//----------------------------------------------------------------------------------

async function all_users (){
    try {
        const response = await fetch ("https://api.github.com/users/ayushm001")      
        const data = await response.json()
        console.log(data);

      } catch (error) {
        console.log("E: " , error );  
      }
}

all_users()    // useing try and catch methhod


//---------------------- othrwise ------------------------------------------------------

 //useing .then ,catchh method

 fetch('https://api.github.com/users/ayushm001')
 .then((response)=>{
    return response.json()
 })
 .then((data)=>{
    console.log(data);
 })
 .catch((error)=>{
    console.log(error);
 })
