function SetUserNAME(username) {
    this.username= username
    console.log("call heree");
}


function Application(username, email, password) {

    // SetUserNAME.call(this.username)  // Result will be Undefinedthis.username is undefined at this point because it hasn’t been set yet.


    SetUserNAME.call(this, username) //SetUserNAME is called with this as its context, which refers to the new Application object
    this.email = email;
    this.password= password;

}

const dataIs = new Application("Adii", "Adii_mass@gamil.com", "123")
console.log(dataIs);