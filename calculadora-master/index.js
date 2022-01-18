const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const result = document.getElementById('result')

let num = 0;

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        result.innerText += button.innerText
        num = result.innerText
        if (num.includes('.')){
            if(button.innerText === '.'){
                button.disabled = true
            }
        }
        console.log(result.innerText);
    })
})

deleteButton.addEventListener('click', () => {
    result.innerText = ''
    numberButtons.forEach(button => {
        button.disabled = false
    })
})


operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        result.innerText += button.innerText
        console.log(result.innerText);
    })
})

equalsButton.addEventListener('click', () => {
    
    try {
        let total = Math.round(eval(result.innerText) * 100) / 100
        if(total === Infinity || total == NaN){
            result.innerText = ''
        }else{
            result.innerText = total
        } 

    } catch (e) {
        if (e instanceof SyntaxError) {
            alert("Try again");
            result.innerText = ''
        }
    }
})

