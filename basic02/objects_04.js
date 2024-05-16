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
console.log(RegularUser.email);
console.log(RegularUser.fullName.Last_name);
console.log(RegularUser.fullName?.Last_name);   // Here the symboll "?" provides extra protection.  
 

 const obj1 = {1: "A", 2: "B"}
 const obj2 = {3: "X", 4: "D"}
 const obj3 = {5: "V", 6: "K"}


//const obj4 = {obj1, obj2}
//const obj4= Object.assign ({}, obj1, obj2)        // Here {}- plays the Target role , and the rest of objects plays Source role
const obj4 = {...obj1, ...obj2, ...obj3}     // Use of spread operator  (...obj)
//console.log(obj4);

const users = [
    {
        Id : "01-A",
        Name : "Ayushman", 
        email : "dfeft@gmail.com"
    },

    {
        Id : "03-A",
        Name : "Bharghav", 
        email : "enofno@gmail.com"
    }, 

    {
        Id : "07-A",
        Name : "Asish", 
        email : "xyz@gmail.com"
    }
]

// console.log(users[1].Name);
// console.log(AppUser);

console.log(Object.keys(AppUser));   //here it puts the datatypes into the Array. that wll help up to apply loops and conditions

console.log(AppUser.hasOwnProperty('name'));  //This methods provide to check weather the property is availible or not???


//-----------------------  OBJECT DESTRUCTURING ---------------------------------------------------------------------------------------------------------------
 
const  Comics = {
    Name : "X-men Origins", 
    price : "200",
    Published : "MARVEL"
}

// console.log(Comics.price);

const {Name} = Comics
const {Name : x}  = Comics     // Here we destructure the object (price --> x)

console.log (x);



// ---------------------------------- JSON --------------------------------------------

{
    "Name" : "Ayushman",
    "Id" : "11A21"
    "Address" : "bbsr"
}
//  in JSON , there is no need to identify the obect. 
