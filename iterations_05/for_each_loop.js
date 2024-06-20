const Heros = ["hulk", "batman", "superman", "blackwidow", "ironman", "flash"]


// . forEach required a call back function 
Heros.forEach( function (item) {
    //console.log(item);
})

// in arrow function wise 
Heros.forEach((item) => {
    //console.log(item);
})


function  printMe(item){
    console.log(item);
}
Heros.forEach(printMe)    // declare with refernce



Heros.forEach((item , array, index) => {
    console.log(item , array, index);
})

//------------------------------------------------
//  [{}, {}, {}]

const Groups = [
    {
        group_name : " A ", 
        group_players : 6 
    } ,
    {
        group_name : " B ", 
        group_players : 7 
    } ,
    {
        group_name : " C ", 
        group_players : 4 
    }
]

Groups.forEach((item) => {
    console.log(item.group_players);    // accessing the proptie of object
})