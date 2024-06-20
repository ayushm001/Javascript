const myObj = {
    RM : 'Real Madrid',
    LP : 'Liverpool',
    MU : 'Manchester United',
    CHL: 'Chelsea',
    LC : 'Lecister City'
}
// forin loop with object --->

for (const key in myObj) {
    // console.log(key); 
    console.log(`${key} stands for ${myObj[key]}`);
}


// for in loop with array -->

const myArr = ["one", "two", "three", "four", "five"]

for (const key in myArr) {
//    console.log(key);
   console.log(myArr[key]);

}