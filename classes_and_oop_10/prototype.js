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