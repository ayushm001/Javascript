// ------------------------ DATATYPES SUMMARY ----------------------------  


 //     Primitive datatypes - (value) 7types
 //     Srting, Number, Boolean, Null, Undefined, Symbol, BigInt
 
 const score= 100
 console.log( score)
 console.log(typeof score)

 const ScoreValue = 100.8      
         //  ( here the decimal(100.8) value is also Number datatypes)
 console.log(typeof ScoreValue)

 
 const IsLoggedin= false

 const OutSideTemp = null
 // to represent  the null value

 let UserEmail;
 // Here it represent undefined datatypes.

const id = Symbol('123')
const Anotherid = Symbol('123')
console.log(id===Anotherid)
    //  here te id & Anotherid value is not same 

const Big_Numb =  123456654321234543456654334567654n
        //    when u use 'n' in next to the number. it automaticlly becomes to Bigint datatypes.
console.log( typeof Big_Numb)



//     Non primitive - (Refernce )  3types
//     Array, Objects, Functions



