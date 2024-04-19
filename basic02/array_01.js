
//------------------------- Array ---------------------------------

//  In Array we must use the value in '[]'

const myArray =  [0, 3, 5, 2, ]
console.log(myArray);
console.log(myArray[2]);   // here it prints the result in index value order

const Peoples =  ["Akhram", "Vivek", "Banshika", 3, 8]
console.log(Peoples[1]);

const NewArray1 = [ 1, 2, 3, 4, 5]
console.log(NewArray1[0]);


// // Array Methods :-
myArray.push(8);          // 'push'method use to put the value in the Array
myArray.push(3);         
myArray.pop();          // 'pop' use to pull the last index value in the Array

console.log(myArray.includes(2));   //.includes define whether the value is exiast in the array or not
console.log(myArray.indexOf (2));   // Define the index value 


const NewArray= myArray.join()    //.join Adds all the elements of an array into a string, separated by the specified separator string.

console.log( NewArray);     
console.log( typeof NewArray);     // convert into string 
console.log( myArray);

// -----------Slice , Splice ------------

// ---------slice----------

const arryX = [0, 1, 2, 3, 4, 5]
console.log("A ", arryX);
const myArray_Y= arryX.slice (1, 3);
console.log(myArray_Y);
console.log(arryX);

//-----> Slice: Gives you a portion without changing the original.
//  thats why the result will be [ 1, 2 ]. but its main obj "arryX" has its orignal value 


//  ----------splice----------
console.log("B ", arryX);
const myArray_Z=  arryX.splice (1, 3);
console.log(myArray_Z);
console.log(arryX);

//-----> Splice: Modifies the original directly by adding, removing, or rearranging elements.
//  But here the result will be print as [ 1, 2, 3 ]. and its orignal obj "arryX" has only left value i.e:- [ 0, 4, 5 ]
