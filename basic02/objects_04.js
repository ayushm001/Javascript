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
// console.log(RegularUser.fullName.Last_name);

const obj1 = {Id :"01", name: "Ayushman"}
const obj2 = {Id :"02", name: "Sameeksha"}
const obj3 = {Id :"03", name: "Bharghav"}

// const obj4  = {obj1, obj2}
// console.log(obj4);

// const obj4 = object.assign({},obj1, obj2, obj3);
const obj4 = {...obj1, ...obj2}
console.log(obj4);
