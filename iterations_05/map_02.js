const myNumb = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const newNumb = myNumb
     .map( (items) => items * 10 )
     .map( (items) => items + 1 )
     .filter( (items)  => {
        return items >= 36
    })
console.log(newNumb);

// we can use multiple methods at a time
// and it flow with chaneing operation that means 
// after we declar  in LN.4 the values are store in array []
// after that it again jump to its net step LN.5 where it add 1 in its array
// again the process will occure with fiter function to check the condition 
// after evaluate the values it will assign in newNumb . after that the o/p will return 