


class Desktop {
    constructor(username) {
        this.username = username;
    }

    logme() {
        console.log(`Username is ${this.username}`);
    }

    createId() {
        return '123';
    }
}

const name = new Desktop("Nikhil");
console.log(name.createId());

class Desktop_2 extends Desktop {
    constructor(username, email) {
        super(username);
        this.email = email;
    }
}

const person = new Desktop_2("Happy", "persion@gmail.com");
console.log(person);
