// .reduce() -->

// The reduce method in JavaScript is a powerful array method that applies a function against an accumulator and 
// each element in the array (from left to right) to reduce it to a single value. 

// syntax:-
// array.reduce(callback(accumulator, currentValue, currentIndex, array), initialValue)


// accumulator: The accumulator accumulates the callback's return values.
// currentValue: The current element being processed in the array.
// 

const myArr = [10, 20, 30, 40, 50, 60, 70, 80]

const new_val = myArr.reduce(function (accumilator, cuurnt_val) {
    //console.log(`acumilator's value : ${accumilator} and current value : ${cuurnt_val}`);
    return accumilator + cuurnt_val
}, 0)   // here 0  is  accumilator's value. that means the starting point

// console.log(new_val);


//--- Useing with Arrow function 

const new_val2 = myArr.reduce( (accumilator, cuurnt_val) => accumilator + cuurnt_val, 0)

//console.log(new_val2);



// ----------  EXAMPLE 

const ShoppingCart = [
    {
        item_name : 'shirts',
        price : 399
    },
    {
        item_name : 'jackets',
        price : 899
    },
    {
        item_name : 'jeans',
        price : 2999
    },
    {
        item_name : 'T-shrts',
        price : 699
    }
]

const TOt_Amount=ShoppingCart.reduce( (accumilator, item) => accumilator + item.price , 0)
console.log(TOt_Amount);