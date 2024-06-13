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
//    console.log(`MULTIPLICATION OF ${i} :---`);

    for (let j = 1; j <= 10; j++) {
        const element = j;
        // console.log(i + ' * ' +j + ' = ' + i*j);
        //console.log(`${i}  *  ${j}  = ${i*j}`);        
    }
    
}

//  array  x   loop

let MyArray= ["komal", "sahil", "arun", "aniksha"]


for (let index = 2; index < MyArray.length; index++) {
    const element = MyArray[index];
    // console.log(element);
    
}
// console.log(MyArray.length);



//**********   Break   and  continue ****************

//  break ---


for (let d= 1;d <= 20 ; d++) {
    const element = d;
    if (d == 8) {
        // console.log(`found the : ${d}`);
        break                                       // use to break a prohgram 
    }
    // console.log(d);
}


//  continue :---

for (let m = 2; m <= 20; m++) {
    const element = m;
    if (m == 3) {
       // console.log(` value is ${m}`);
        continue
    }
    // console.log(m);
    
}

