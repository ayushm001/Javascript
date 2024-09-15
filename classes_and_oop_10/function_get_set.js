// Funnction base getter and setter 


function User(email, password) {   
    
    this.email = "ayush@gmail.com";
    this.password = "12aaccm"

    Object.defineProperty(this,'email', {

        get:function(){
            return this._email.toUpperCase();
        },
        set:function(value){
            this._email = value;
        }
    })

    Object.defineProperty(this,'password', {
        get:function(){
            return this._password.toUpperCase();
        } ,
        set:function(value){
            this._password = value;
        }
    })

    // use the constructor to initialize the propoties

    this.email= email;
    this.password = password;
}

const Desktop = new User("xyz@gamil.xom", '11abxu')
console.log(Desktop.email); 
console.log(Desktop.password); 