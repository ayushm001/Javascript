const form = document.querySelector('form')

form.addEventListener('submit', function (x){
    x.preventDefault()
    // .preventDefault() 

    const weight = parseInt(document.querySelector('#KG').value)
    const height = parseInt(document.querySelector('#CM').value)

    //   .value to get or set the value of form elements.
    //  parseInt -> to obtain only int values 

    const result = document.querySelector('.result')
    let bmi      // this will help to display the BMI- suggestion part

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
    

    // Display guide sugestion 

    const adv= document.querySelector('.sugg')
    // applying BMI-suggesstion

    if (bmi <= 18.6) {
        adv.innerHTML = `<span> you are under weight ${bmi} </span>`
    } else if (bmi >= 24.9) {
        adv.innerHTML = `<span> you are over weight. you need a good diet  ${bmi}</span>`
    } else {
        adv.innerHTML = `<span> Congartulation you are in normal range, ${bmi} </span>`
    }
    }  //  we need to hold all the suggestion part  in result_else()- block, 
       //  this will help to  display the bmi-result in suuggestion part (SCOPE- concept)

})
