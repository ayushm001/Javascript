
// const Heros = ["hulk", "batman", "superman", "blackwidow", "ironman", "flash"]

// const World = Heros.forEach ((members) => {
//     console.log(members);
//     return members
// })
// console.log(World);       // After declaring the variable it returns as undefined 
// note:- .Foreach never returns the value  

const Numb = [1, 2, 3, 4, 5, 6, 7, 8, 9]


//const NewNum = Numb.filter( (item) => item > 5 )   // (1) one way to declar 
//console.log(NewNum);

// .filter =  this method is used to create a new arrray wit all elements that pass in test implemented by the provided functon 
//         *  here in this function we can use any conditions  

const NewNum = Numb.filter( (elements) => {
    return elements > 5                           // here we need to write "return" function. cause  we create it with scope {} 
})  

//console.log(NewNum);          // (2) another way to declar


const newbox = []

Numb.forEach( (items) => {
    if (items > 5) {
        newbox.push(items)      // we apply with conditions 
    }
})
//console.log(newbox);           //(3) another way to declar




//----  Example

const Automotive  = [
    { make:'BMW', model : '1 series  ', category:'coupe, covertable', year:2013},
    { make:'Chevrolet', model : '3500 crew cab', category:' pickup', year:1994},
    { make:'Toyota', model : '4Runner', category:'SUV', year:2019},
    { make:'Alfa Romeo', model : '4c spider ', category:'convertable ', year:2015},
    { make:'BMW', model : '3 series ', category:'sedan', year:2021},
    { make:'RAM', model : '3500 meg cab ', category:' p', year:2018},
    { make:'Volvo', model : '850', category:'sedan', year:1993 },
    { make:'Porche ', model : '928', category:'Hatchback', year:1995},
    { make:'Audi', model : 'A5- sprots', category:'coupe', year:2017},
    { make:'Nissan', model : 'Armada', category:'SUV', year:1999},
    { make:'Ford ', model : 'C- max Hybrid', category:'Wagon', year:2017},
];

const Slt_Auto = Automotive.filter( (cars) => cars.category === 'sedan')
const Slt_Auto_2 = Automotive.filter( (cars)=> {
    return cars.year >= 2000 && cars.make === 'BMW'
})
console.log(Slt_Auto_2);