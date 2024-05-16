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
users[1].email
// console.log(tinderUser);
/ course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]



// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]



// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


