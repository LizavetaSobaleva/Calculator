// ---- Calculator
const input1 = document.getElementById('input1')
const input2 = document.getElementById('input2')
const submitBtn = document.getElementById('submit')
const plusBtn = document.getElementById('plus')
const minusBtn = document.getElementById('minus')
const multiplyBtn = document.getElementById('multiply')
const divideBtn = document.getElementById('divide')
const resultElement = document.getElementById('result')
let action

function getAction(symbol){
    return function(){
        action = symbol
    }
}

plusBtn.onclick = getAction('+')

minusBtn.onclick = getAction('-')

multiplyBtn.onclick = getAction('*')

divideBtn.onclick = getAction('/')

function computeResult(inp1, inp2, actionSymbol){
    const num1 = Number(inp1.value)
    const num2 = Number(inp2.value)
    return eval(num1+actionSymbol+num2)
}

function printResult(result){
    resultElement.textContent = result
}

submitBtn.onclick = function () {
    let result = +computeResult(input1, input2, action).toFixed(6)
    printResult(result)
}