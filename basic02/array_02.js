const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

marvel_heros.push(dc_heros);
console.log(marvel_heros);
console.log(marvel_heros.indexOf("Ironman")); 

console.log(marvel_heros[3]);
console.log(marvel_heros[3][2]);   


marvel_heros.concat(dc_heros);
console.log(marvel_heros);
//  .push function only push the value in existion values
//  .concat function while pus it . it will return as a new array

const All_Heros = marvel_heros.concat(dc_heros);
console.log (All_Heros);    // Thats how '.concat' works. u need to declar new variable for that

const All_Heros_2 =[...dc_heros, ...marvel_heros] 
console.log( All_Heros_2 );   //spread the values

const array_02 = [[1, 2, [2, 9, 4, 1, [13, 32], 32], 12, 7], [5, 6, 8]]
const another_sub_array  = array_02.flat(Infinity);
console.log(another_sub_array);    //
console.log(Array.isArray(" Ayushman "));   //'.isArray' checks weather the given object is arrays or not.
console.log(Array.from(" Ayushman "));     //'.from' converts thhe object into arrays
console.log(Array.from({name : "Ayushman"}));    // here it prints empity . ause ere we declare its key-function.

let score1= 200
let score2= 500
let score3= 400
let score4= 200
let score5= "Adhya"

console.log(Array.of(score1, score2, score3, score4, score5));   //'.of' 

