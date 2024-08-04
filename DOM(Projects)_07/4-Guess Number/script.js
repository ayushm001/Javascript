const number = console.log(parseInt(Math.random()*100+1))


const submit = document.querySelector('.submt');
const input = document.querySelector('.guess');
const guessSlot = document.querySelector('#a');
const remaining = document.querySelector('#b');
const LoworHigh = document.querySelector('.LoworHigh');
const startOver = document.querySelector('.lower');



const  p = document.createElement('p');

let prevGuess = []
let numGuess = 1;

let PlayGames = true ;
if (PlayGames) {
    submit.addEventListener('click', function(e){
        e.preventDefault();
        const guess = parseInt(input.value)
        console.log(guess);
        ValidationGuess(guess)
    });
}



function ValidationGuess(guess){
    // Check 
    if (isNaN(guess)) {
        alert('Please enter a valid number')
    } else if(guess > 100){
        alert('Please enter a number whichh is less than 100')
    } else if (guess < 1){
        alert('Plaese enter a nummber which is greater than 1')
    } else{
        prevGuess.push(guess)
        if (numGuess === 11) {
            displayGuess(guess)
            DisplayMessage(`Random number was ${number}`)
            Endgame()
        }else{
            displayGuess(guess)
            CheckGuess(guess)
        }
    }
}

function CheckGuess(guess) {
    //
     if (guess === number) {
        DisplayMessage('You guess it right')
        Endgame()
     } else if (guess > number){
        DisplayMessage('The number is big')
    }else if (guess < number){
        DisplayMessage('The number is Low')
     }
}

function displayGuess(guess) {
    // 
    input.value = '';
    guessSlot.innerHTML += `${guess} , `;
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`;
}

function DisplayMessage(message) {
    //
    LoworHigh.innerHTML = `<h2> ${message}</h2>`
}

function Endgame() {
    //
    input.value = ''
    input.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML=  `<h2 id="game"> Start new game </h2>`
    startOver.appendChild(p)
    PlayGames = false;
    Newgame()
}

function Newgame() {
    // 
}
