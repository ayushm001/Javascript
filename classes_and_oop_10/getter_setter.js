class User {

    constructor(email, password){
        this.email = email
        this.password = password
    }

    //Applying getter and setter

    get password(){
        return this.password_x.toUpperCase()
    }

    set password (value){
        this.password_x = value    
    }
}

const Name = new User("ayushman@gamil", "xyz5abcgh222")
console.log(Name.password);


/*

   Getters and setters are useful in JavaScript for controlling access to an object’s properties


   USE CASE : 
    1. Data validation 
    2. Computed propoties
    3. Enacptulation
    4. Logging and debugging
    5. Read only propoties

*/