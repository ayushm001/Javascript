//  maps

// Maps are a collection of key-value pairs where the keys can be of any type (objects, primitive values, etc.).
// They maintain the order of elements, unlike regular objects, which do not guarantee order.

// map holds unique value 
// it maintain in sequncial order  

const map = new Map()
map.set ('FCB', "Barcelona FC")
map.set ('MAN', "Manchester United FC")
map.set ('RMA', "Realmadrid FC")
map.set ('BVB', "Dortmund FC")
map.set ('MAN', "Manchester United FC")   // here it can't be used again. cause of unique value

//console.log(map); 



//---- applying loop in map ------

for (const team of map) {
    console.log(team);        // performing in array form
}
// op-
// [ 'FCB', 'Barcelona FC' ]
// [ 'MAN', 'Manchester United FC' ]
// [ 'RMA', 'Realmadrid FC' ]
// [ 'BVB', 'Dortmund FC' ] 


for (const [team, value] of map) {
    console.log(team, `:-`,value);    // destructuring thhe values
}

// deals with object ??

const myObj = {
    'player1' : 'Aguero',
    'player2' : 'Busquites',
    'player3' : 'Yamal'
}
for (const [key, name]of myObj) {
    console.log(myObj);  // error occure due to object is not iterable ( myObj is not iterable)
}