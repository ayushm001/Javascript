// Object literals  - Are like little containers that hold various pieces of data.

const JsUser = {
    name : "Ayushman",
    age : 20 ,
    Email: "ayushman@20gmail.com" ,
    location: "Bhubaneswar", 
    Isloggedin: true ,
    lastLoginDays: ["Monday", "Wednesday"], 
   "Full Name": "Ayushman Rout"
}
// console.log(JsUser.Email);
// console.log(JsUser["Email"]);  //prefer way to access
// console.log(JsUser["Full Name"]);

JsUser.location = "Istanbul"   //To overwrite and modify the data
console.log(JsUser.location)
// Object.freeze(JsUser)          //it freeze  the value , we can't update it 
JsUser.location = "Ladakh"
console.log(JsUser)

JsUser.greeting = function(){
    console.log("Hello Js User");
}
console.log(JsUser.greeting());
console.log(JsUser.greeting);

JsUser.greeting2 = function(){
    console.log(`Hello Js User , ${this.name}`);     // For reference purpose 
}
console.log(JsUser.greeting2());
console.log(JsUser.greeting2);



// SYMBOL- Unique datatypes

const Mysym = Symbol("Key 1")
console.log(typeof Mysym)

const JsUser2 ={
    name : "Ayushman",
    age : 20 ,
    Email: "ayushman@20gmail.com" ,
    location: "Bhubaneswar", 
    Isloggedin: true ,
    [Mysym] : "key 1",
}
// console.log(JsUser2)
// console.log(JsUser2[Mysym]);
// console.log(JsUser2.Mysym);
// console.log(typeof JsUser2[Mysym]);

