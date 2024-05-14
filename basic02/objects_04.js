// singleton
// Object.create

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Ayushman",
    "full name": "ROUT AYUSHMAN ",
    [mySym]: "mykey1",
    age: 18,
    location: "Istanbull",
    email: "man@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "man@google.com"
// Object.freeze(JsUser)
JsUser.email = "man@microsoft.com"
// console.log(JsUser);