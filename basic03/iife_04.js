//  Immediately Invoked Function Expression ( IIFE )

// used to execute a function as soon as it is defined

// Avoid Polluting Global Scope: It helps keep variables and functions from messing up other parts of your code by keeping them inside the IIFE.

// Encapsulation: It keeps your code self-contained and organized.

(function f1(){
    // named IIFE
    console.log(`DB connected`);
})
();     // apply semicolon to end the statment af. that the next sta. will run (ln. 16)

// to avoid the polution of global scopes

(()=> {
    console.log(`DB connected two`);
}) ();

((name)=> {
    console.log(`DB connected two ${name}`);  //parameter passing
}) ('ayushman')

// NOTE-   to write 2 IIFE in one file, we need to add semicolon in end of the statment 