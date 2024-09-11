
/*

getOwnPropertyDescriptor() --> 

This method is used to return a property descriptor for a specific property on a given object.
This method provides detailed information about the property, such as its value, whether it is writable, enumerable, and configurable.


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

console.log(Object.getOwnPropertyDescriptor(Obj_X,'name'))

// defineProperty( ) - for edit the propoties (editable in some cases)
//  is used to define a new property directly on an object or modify an existing property on an object, and it returns the object
Object.defineProperty(Obj_X, "name", {
    writable: false,
    enumerable: false,
    configurable: false
})
console.log(Object.getOwnPropertyDescriptor(Obj_X,'name'))

//adding loop
