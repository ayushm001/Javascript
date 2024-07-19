const form = document.querySelector('form')

form.addEventListener('submit', function (x){
    x.preventDefault()
    // .preventDefault() -> cancels the event (default action that belongs to event will not occure )
    //                       means it did not open a new pages and hold it.

  
    const weight = parseInt(document.querySelector('#KG').value)
    const height = parseInt(document.querySelector('#CM').value)

    //   .value to get or set the value of form elements.
    //  parseInt -> to obtain only int values 

    const result = document.querySelector('.result')
    // applying condition 
    if (weight === '' || weight < 0 || isNaN(weight) ) {
        result.innerHTML= `Please give a Valid value ${weight}`
    } 
    else if (height === '' || height < 0 || isNaN(height)) {
        result.innerHTML = `Please enter a valid  value ${height}`
    }
    else {
        const bmi = (weight/(height/100)**2).toFixed(2)
        // .toFixed(2) ->  the result will display upto 2 decimal places.

        result.innerHTML = `<span>${bmi} is your Body-Mass-Index</span>`
    }
})
