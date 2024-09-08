
/*
    NOTE :

    1.  A constructor is a function 
    2.  An instance created by a constructor is an object
    
    
*/


class USER {
    constructor(Username){
        this.Username = Username
    }

    logme(){
        console.log(`Usernamee  is ${this.Username}`);
    }

}

class TEACHER extends USER{    //extends keyword is used in class declarations to create a class that inherits from another class
    constructor (Username, email, password){
        super(Username)       //Call the constructor of the parent class:

        this.email = email
        this.password = password

    }

    addCourse(){
        console.log(`New course added by ${this.Username}`);
    }
}

const person = new TEACHER("Gita", "Gita@gmail.com", "112233")
person.addCourse()

const person__2 = new TEACHER("arnab")
person__2.logme()

// console.log(person === USER);
console.log(person instanceof TEACHER);

// instanceof  refers to  to check if an object is an instance of a specific class or constructor function
