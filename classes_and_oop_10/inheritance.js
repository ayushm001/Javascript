class USER {
    constructor(Username){
        this.Username = Username
    }

    logme(){
        console.log(`Usernamee  is ${this.Username}`);
    }

}

class TEACHER extends USER{
    constructor (Username, email, password){
        super(USER)

        this.email = email
        this.password = password

    }

    addCourse(){
        new console.log(`New course added by ${this.Username}`);
    }
}

const person = new TEACHER("Gita", "Gita@gmail.com", "112233")