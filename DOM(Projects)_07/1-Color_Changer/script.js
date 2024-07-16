
const buttion = document.querySelectorAll('.button')
const body = document.querySelector('body')

// console.log(body);


buttion.forEach(function (button) {
    console.log(button);
    button.addEventListener('click' , function(event){
        console.log(event);
        console.log(event.target);
        if (event.target.id === 'red') {
            body.style.backgroundColor = event.target.id
        } 
           // we can also target its hardcore value . otherwise defined it with id
        if (event.target.id ==='green') {
            body.style.backgroundColor = event.target.id
        }
        if (event.target.id === 'blue') {
            body.style.backgroundColor = 'blue'
        }
        if (event.target.id === 'grey') {
            body.style.backgroundColor = 'grey'
        }
        if (event.target.id === 'yellow') {
            body.style.backgroundColor = event.target.id
        }
    });
});

// We can also use it through Switch-case
