const AppUser = new Object()

// const AppUser2= {}
//console.log( AppUser);
// console.log( AppUser2);

AppUser.name = "Ayushman"
AppUser.Id = "1a"
AppUser.Location = "BBSR"
AppUser.isLoggedin = true

// console.log(AppUser);

const RegularUser = {
    email : "ayushman@gmail.com",
    fullName : {
        first_name : "Ayushman",
        Last_name : "Rout"
    }
}
// console.log(RegularUser.email);
//console.log(RegularUser.fullName.Last_name);
//console.log(RegularUser.fullName?.Last_name);   // Here the symboll "?" provides extra protection.  
 

 const obj1 = {1: "A", 2: "B"}
 const obj2 = {3: "X", 4: "D"}
 const obj3 = {5: "V", 6: "K"}


// const obj4 = {obj1, obj2}
const obj4= Object.assign({}, obj1, obj2)        // Here {}- plays the Target role , and the rest of objects plays Source role
console.log(obj4);
