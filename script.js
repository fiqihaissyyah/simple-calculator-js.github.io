let prevNumber = ''
let calculationOperator = ''
let currentNumber = '0'

const inputNumber = (number) => {
    if (currentNumber === '0') {
        currentNumber = number
    } else {
        currentNumber += number
    }
}

const calculate = () => {
    let result = ''
    switch (calculationOperator) {
        case '+':
            result = parseFloat(prevNumber) + parseFloat(currentNumber)
            break;
        case '-':
            result = parseFloat(prevNumber) - parseFloat(currentNumber)
            break;
        case '*':
            result = parseFloat(prevNumber) * parseFloat(currentNumber)
            break;
        case '/':
            result = parseFloat(prevNumber) / parseFloat(currentNumber)
            break;
        default:
            break;
    }
    currentNumber = result
    calculationOperator = ''
}

const inputOperator = (operator) => {
    if (calculationOperator === '') {
        prevNumber = currentNumber
    }
    calculationOperator = operator
    currentNumber = '0'
}

const inputDecimal = (dot) => {
    if (currentNumber.includes('.')) {
        return
    }
    currentNumber += dot
}

const clearAll = () => {
    prevNumber = ''
    calculationOperator = ''
    currentNumber = '0'
}

const calculatorScreen = document.querySelector(".calculator-screen");
const updateScreen = (num) => {
    calculatorScreen.value = num
}

const numbers = document.querySelectorAll(".number");
numbers.forEach((num) => {
    num.addEventListener("click", (event) => {
        inputNumber(event.target.value)
        updateScreen(currentNumber);
    })
})

const operators = document.querySelectorAll(".operator")
operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        inputOperator(event.target.value);
    })
})

const equalSign = document.querySelector('.equal-sign')
equalSign.addEventListener('click', () => {
    calculate()
    updateScreen(currentNumber)
})

const clearBtn = document.querySelector(".all-clear")
clearBtn.addEventListener('click', () => {
    clearAll()
    updateScreen(currentNumber)
})

const decimal = document.querySelector(".decimal")
decimal.addEventListener('click', (event) => {
    inputDecimal(event.target.value)
    updateScreen(currentNumber)
})

