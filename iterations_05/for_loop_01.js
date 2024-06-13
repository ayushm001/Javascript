//  for loop


for (let index = 0; index <=5; index++) {
    const element = index;
    // console.log(element);
}


// for loop with condition

for (let x = 1; x <= 10; x++) {
    const element = x;
    if ( x == 7) {
        // console.log("seven");
    }
    // console.log(element);
}


// loop with-in loop

for (let a = 0 ; a < 10; a++) {
    // console.log(`values are : ${a}`);
    for (let b = 0; b <= 10; b++) {
        const element = b;

        // console.log(`inner loops are ${b}`);        
    }
}

//  example of loop within loop ( TABLE )

for (let i = 1; i <= 10; i ++) {
    const element = i
    console.log(`MULTIPLICATION OF ${i} :---`);

    for (let j = 1; j <= 10; j++) {
        const element = j;
        // console.log(i + ' * ' +j + ' = ' + i*j);
        console.log(`${i}  *  ${j}  = ${i*j}`);        
    }
    
}