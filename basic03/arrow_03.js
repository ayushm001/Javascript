const user = {
    username : "Ayushamn",
    price : 999,

    welcomeMessage: function(){

        console.log(`${this.username}, Welcome to website`);
        console.log(this)
    }
 
}
// user.welcomeMessage()
// user.username = "Ankit"
// user.welcomeMessage()
// console.log(this);
// console.log(welcomeMessage()); 

// function desktop() {
//     let username = "Ayushman"
//     console.log(this.username);
// }
// desktop()

// const desktop = () => {
//     let username= "ayushman"
//     console.log(this.username);
// }
// desktop()

// Basic syntax of arrow finction :-    () => {}

// const addtwo = (num1, num2) => {
//     return num1+num2
  
// }
// console.log(addtwo(2, 3));             // basic arrow function


// const addtwo = (num1 , num2) => num1 + num2
const addtwo = (num1, num2) => (num1+num2)
console.log(addtwo(3, 4));
