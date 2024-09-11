
/*

getOwnPropertyDescriptor() --> 

This method is used to return a property descriptor for a specific property on a given object.
This method provides detailed information about the property, such as its value, whether it is writable, enumerable, and configurable.

1. writable     ->  determines whether the value of the property can be changed

2. Enumerable   ->  determines whether the property shows up during enumeration of the properties on the object (e.g., in a for...in loop or Object.keys()).

3. Configurable ->  determines whether the property descriptor can be changed and whether the property can be deleted from the object.

*/

const Descriptor_value= Object.getOwnPropertyDescriptor(Math, 'PI')
// console.log(Descriptor_value);

// here the PI value is fixed


//Useing own object's  ()

const Obj_X = {
    name : "Server 1",
    cost : 5000,
    isAvailable : true
}

// console.log(Object.getOwnPropertyDescriptor(Obj_X,'name'))

// defineProperty( ) - for edit the propoties (editable in some cases)
//  is used to define a new property directly on an object or modify an existing property on an object, and it returns the object
Object.defineProperty(Obj_X, "name", {
    writable: true,
    enumerable: true,
    // configurable: true
})
// console.log(Object.getOwnPropertyDescriptor(Obj_X,'name'))

//adding loop

for (let [key, value] of Object.entries(Obj_X)) {  //This method returns an array of the object’s own enumerable property [key, value] pairs.
    if (typeof value !== 'function'){
        console.log(`${key}   :   ${value}`);
    }
}
