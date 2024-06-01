// let a = 10
// const b = 20
var c = 3000

if (true) {
    let a = 10
    const b = 20
    var c = 30      // Here we need to avoid "var ". cause it prints the console value in global scope

}

// console.log(a);
// console.log(b);
// console.log(c);

// ---------------------------------------

let a = 500

if (true) {
    let a = 900
    console.log( "Inner :", a);
}

// console.log(a); 

// --------------------------------
function one() {
    const username = "Aaku "

    function two(){
        const website = " Youtube"
        console.log( username);

    }
    // console.log (website);

    two()
    
}
one()

// -----------------> NOTE
//  in scope, Child can access the propoties of Parent. but parent can't access the propoties of child
//  thats why console.log (website)   (9 line) can't  be execute  

if (true) {
    const firstname = "Ayushman "
    if (firstname === "Ayushman "){
        const Lastname = "Rout"
        // console.log(firstname);
        console.log( firstname+ Lastname);
    }
    console.log(firstname);
}

//  +++++++++++++++++++++++++++++  INTERESTING ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

console.log(addone(2));

function addone(num){
    return num +1
}


// --------- 2 -->

const addtwo = function(num){
    return num +2
}
console.log(addtwo(4));

