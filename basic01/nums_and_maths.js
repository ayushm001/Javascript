const score=  100
console.log(score);


const balance = new Number(200);
console.log(balance);
// here it specify the object

console.log(balance.toString());
console.log(balance.toFixed (2));
// detect a Precision value. round it to two decimal places and return it as a string


const numb2 = 38.9756
console.log(numb2.toPrecision(2));
// toPrecision() method  helps to control how many important digits you want to keep in a number. generally in case of that it converts the decimal value to its roundfiguere value


const numb3= 100000
console.log(numb3.toLocaleString('en-IN '));



// --------------------------------------   MATHS   ---------------------------------------------------

console.log(Math);
console.log(Math.abs(-5));      //'.abs' function only converts the negative value into posetive 
console.log(Math.round(5.6));
console.log(Math.ceil(5.2));    //.ceil function defines te maximum decimal value
console.log(Math.floor(5.2));   // .floor function used for minimum decimal value
console.log(Math.min(25, 23, 12,40));  
console.log(Math.max(25, 23, 12,40));   
console.log(Math.sqrt(16));


// console.log(Math.random());
// console.log(Math.random());
console.log(Math.random());
console.log(Math.random()*10);
