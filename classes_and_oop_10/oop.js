// Object-Oriented Programming 


// Object : Collection of propoties and methods


const user = {
    user_name : 'alex',
    user_Id : 12,
    Signed_In: true,

    getUser_details: function(){
        //console.log("print details");
        console.log(`userName : ${this.user_name}`);  // here this refers to  the user object
        console.log(this);

    }
}
// console.log(user.user_Id);
 console.log(user.getUser_details());
// console.log(this);       refers to empity object


function User(name, login,  id) {
    this.name = name;
    this.login = login;
    this.id = id;
    
    return this
 }
 const USER_1 = User("person1", true, 123)
 const USER_2 = User("person2", false, 123)
 const USER_3 = User("person3", true, 123)
 console.log(USER_1);
