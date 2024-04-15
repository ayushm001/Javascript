const Name =  "Ayushman "
const repoCount = 30


console.log (Name + repoCount + "Value");
//  out deted sytax not to use


console.log (`Hello my name is ${Name} and my repo count is ${repoCount}`);
// This syntx consider as a good synatx so called morden syntax . 
//  (``) is used for String interpolation 
//  String interpolation - is used for combineing texts & variables. where {} are placeholders for the variables.
//  ${} - Used for variable declartion 

const GameName = new String ('Ayushman')
//  here the variable GameName plays the role of an object insted of a string 
console.log (typeof GameName)
console.log(GameName [1])  
//  HERE THE RESULT WILL BE 'Y'
console.log(GameName.__proto__);
// 
console.log(GameName.length ) 
//  to declare the variables length

console.log(GameName.toUpperCase ())  
// to convert the variables in to uppercase

console.log(GameName.charAt(3) )  
//  To find the charecter at the given index value

console.log(GameName.indexOf ('n'))  
//  To find the index value of the given charecter
  
const NewString = GameName.substring(0,5);
console.log(NewString);

const NewString2 = GameName.slice(-3,5);
console.log(NewString2)
//  slice - using for limited charecters

const NewString3= "   Ayushman   "
console.log(NewString3);
//  here the result will be "   Ayushman   " 
console.log(NewString3.trim());
//  here it teminates the spaces . and the output is "Ayushman"

const url = "https://ayushman.com/ayushman40%rout"

console.log (url.replace('40%','-') )
