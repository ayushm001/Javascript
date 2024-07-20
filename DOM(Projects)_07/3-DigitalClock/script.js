const clock = document.querySelector('.clock');

setInterval(function() {
    let date = new Date();
    clock.textContent = date.toLocaleTimeString(); 
}, 1000);



// setInterval() -> Repetedly calls a function with a derived time delay. Here the time delay is 1000ms.
//                  That means repetdly the action will done


//  Date()  -> date obj helps to represent current date and time


// .toLocaleTimeString() -> matheod of Date() obj. helps to refers time portion
