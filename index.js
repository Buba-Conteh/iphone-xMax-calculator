let userInput = document.getElementById('user-input');

// function setUserInput(inputValue) {

//     if (inputValue == '=') {
//         userInput.value = eval(userInput.value)
//         return
//     }
//     if (inputValue == 'AC') {
//         userInput.value = ''
//         return
//     }
//     if (inputValue == '+/-') {
//         userInput.value = -1*userInput.value
//         return
//     }
//     userInput.value +=  inputValue
// }

// second method 

// let one = document.querySelector('#one')

// one.addEventListener('click',  function() {
//     userInput.value +=  one.textContent
// })


let buttons = document.querySelectorAll('button')
// console.log(buttons);

for (const button of buttons) {
    button.addEventListener('click',  function() {

        if (button.textContent == '=') {
                    userInput.value = eval(userInput.value)
                    return
                }
                if (button.textContent == 'AC') {
                    userInput.value = ''
                    return
                }
                if (button.textContent == 'x') {
                    userInput.value +=  '*'
                    return
                }
                if (button.textContent == '÷') {
                    userInput.value +=  '/'
                    return
                }
                if (button.textContent == '+/-') {
                    userInput.value = -1*userInput.value
                    return
                }
                if (button.textContent == '%') {
                    let expressionValue = button.textContent

                   let number = userInput.value.substring(expressionValue.length-1)

                   let result  = number/100
                    // console.log(number);
                    userInput.value =  result
                    return
                }


                // validate Strings



            userInput.value +=  button.textContent
        })
        
}