// let Ply_name = "Thomas Muller              "
// let Ply_club = "Bayern munich"

// console.log(Ply_name.truelength);


/*
 PROTOTYPES -
 
 A prototype is also an object, and it acts as a blueprint from 
 which other objects inherit properties and methods
 */


let Players = ["Pique", "Antony", "yamal"]

let club = {
    Pique: "Madrid",
    Antony: "Man Utd",
    Yamal : "Barcelona",
    
    getClubSts : function () {
        console.log(`Antony is Playing for ${this.Antony}`);
    }
}

Object.prototype.Name = function(){
    console.log(`they are all wingers`);
}

Array.prototype.New_name = function(){
    console.log(`All are players`);
}

// Players.Name()
club.Name()

club.New_name()  // here the club is an object not an array !!
//  The New_name method is added to Array.prototype, which means it is available to all array instances, but not to objects.
Players.New_name() 


//  INHERITANCE

 /* 
 
  Prototypal inheritance in JavaScript is a way for objects to inherit properties and methods from other objects.
  This is different from classical inheritance, where classes inherit from other classes.


   Property: Every JavaScript object has a hidden property called [[Prototype]] (or __proto__ in older syntax), which points to another object.
             This other object is called the prototype.

    Prototype chain : When you try to access a property or method on an object, JavaScript first looks at the object itself. If it doesn’t find it there, it looks at the object’s prototype,
                      and then the prototype’s prototype, and so on, until it finds the property/method or reaches the end of the chain (null).
 
 */



const automobile = {
      name: "Bike",
      safety : false,
    }
    
    const car = {
        safety: true
    }
    
    const power = {
        isAvalible : true
    }
    
    const BMW = {
        Speed : true,
        comfort : true,
        __proto__: car
    }
    
    automobile.__proto__ = car   // outdated approach
    
    
    Object.setPrototypeOf(power, automobile) // modern syntax


    
 let Ply_name = "Thomas Muller              "
 
 String.prototype.OrignalLength = function(){
     console.log(`${this}`);  
     console.log(this.name);  // undefined cause name is not a property of string 
     console.log(`Origanl lengt is  -> ${this.trim().length}`);
 }
 
 Ply_name.OrignalLength()
 
 "AYUSHHMAN".OrignalLength()
 "cherry            ".OrignalLength()
