 
//  --------------------- DATES ------------------------------------

 let myDate = new Date()

// console.log(myDate);
// console.log(myDate.toString());    //gives the date, indian standard time
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);        //object

// let myNewDATE = new Date(2024, 0, 12);  // here the constuctor is zero based wich means it counts from  1 as 0 
// let myNewDATE=  new Date( 2024, 0, 3);   // Here it prints the value '2024-1-2' insed of '2024-1-3'. cause Internally, when you say new Date(2023, 0, 3), JavaScript understands it as January 3, 2023. But when you print this date, JavaScript converts it back to a human-readable format where months start from 1, not 0.So when you print it out, it looks like January 2, 2023, instead of January 3, 2023. But rest assured, internally, it's still January 3, 2023. It's just a little quirk of how JavaScript handles dates.So when you print it out, it looks like January 2, 2023, instead of January 3, 2023. But rest assured, internally, it's still January 3, 2023. It's just a little quirk of how JavaScript handles dates.
// console.log(myNewDATE);

// let myTimeStamp = Date.now();    //will print the current timestamp to the console.
// console.log(myTimeStamp);

let Newdate= new Date()
console.log(Newdate);
console.log(Newdate.getMonth());    //as we knw its constructor is a zero based. tats why it prints 3 insetead of 4
console.log(Newdate.getFullYear());   
console.log(Newdate.getDate());    
console.log(Newdate.getDay());    
