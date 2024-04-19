
//------------------------- Array ---------------------------------

//  In Array we must use the value in '[]'

const myArray =  [0, 3, 5, 2, ]
console.log(myArray);
console.log(myArray[2]);   // here it prints the result in index value order

const Peoples =  ["Akhram", "Vivek", "Banshika", 3, 8]
console.log(Peoples[1]);

const NewArray1 = [ 1, 2, 3, 4, 5]
console.log(NewArray1[0]);


// Array Methods :-
myArray.push(8);          // 'push'method use to put the value in the Array
myArray.push(3);         
myArray.pop();          // 'pop' use to pull the last index value in the Array

console.log(myArray.includes(2));   //.includes define whether the value is exiast in the array or not
console.log(myArray.indexOf (2));   // Define the index value 


const NewArray= myArray.join()    //.join 


/ console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()

// console.log(myArr);
// console.log( newArr);


// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);

console.log( NewArray);     
console.log( typeof NewArray);

console.log( myArray);

 
