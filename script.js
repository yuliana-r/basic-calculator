let CURRENT_NUMBER;
let CURRENT_OPERATOR;
let OPERAND;
let RESULT;
let decimalCount = 0;
let clickCount = 0;

const display = document.getElementById('display');
const clearBtn = document.getElementById('clear');
const numberBtn = document.querySelectorAll('.number');
const operatorBtn = document.querySelectorAll('.operator');
const equalsBtn = document.getElementById('equals');
const decimalBtn = document.getElementById('decimal');

window.addEventListener('keydown', function (e) {
    const key = document.querySelector(`button[data-key='${e.keyCode}']`);
    key.click();
});

numberBtn.forEach(button => {
    button.addEventListener('click', () => {

        if (button.getAttribute('data-value') === '.') {
            decimalCount++;
        }

        if (button.getAttribute('data-value') === '.' && decimalCount > 1) {
            return;
        }

            if (display.textContent == CURRENT_NUMBER || display.textContent == 0 || 
                display.textContent == "Yikes" || display.textContent == "NaN") {
                clearDisplay();
                display.textContent = (display.textContent + button.getAttribute('data-value')).substring(0, 11);
            } else {
                display.textContent = (display.textContent + button.getAttribute('data-value')).substring(0, 11);
            }

            
    })
})

operatorBtn.forEach(button => {
    button.addEventListener('click', () => {

        decimalCount = 0;

        if (CURRENT_NUMBER !== undefined && OPERAND === undefined && CURRENT_OPERATOR !== undefined) {
            assignOperand();
            clearDisplay();
            updateResult();
            CURRENT_OPERATOR = button.getAttribute('data-value');
            OPERAND = undefined;


            console.log(`if #1`);
            console.log(`current number: ${CURRENT_NUMBER}`);
            console.log(`current operator: ${CURRENT_OPERATOR}`);
            console.log(`current operand: ${OPERAND}`);

        } else if (CURRENT_OPERATOR === undefined &&
            (CURRENT_NUMBER === undefined || CURRENT_NUMBER !== undefined && OPERAND === undefined)) {
            CURRENT_NUMBER = +display.textContent;
            CURRENT_OPERATOR = button.getAttribute('data-value');
            display.textContent = CURRENT_NUMBER;

            console.log(`if #2`);
            console.log(`current number: ${CURRENT_NUMBER}`);
            console.log(`current operator: ${CURRENT_OPERATOR}`);
            console.log(`current operand: ${OPERAND}`);
        }
    })
})

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return +(Math.round((a / b) + "e+2") + "e-2");
}

function operate(a, b, operator) {
    switch (operator) {
        case "+":
            return add(a, b);
        case "-":
            return subtract(a, b);
        case "*":
            return multiply(a, b);
        case "/":
            return divide(a, b);
    }
}

function updateResult() {
    RESULT = operate(+CURRENT_NUMBER, +OPERAND, CURRENT_OPERATOR);
    CURRENT_NUMBER = +RESULT;
    CURRENT_NUMBER = Math.round(CURRENT_NUMBER * 100) / 100;

    if (CURRENT_NUMBER.toString().length > 10) {
        display.textContent = CURRENT_NUMBER.toExponential(4);
    } else {
        display.textContent = CURRENT_NUMBER;
    }
}

function assignOperand() {
    OPERAND = +display.textContent;
}

function clearDisplay() {
    display.textContent = '';
}

function allClear() {
    display.textContent = '';
    CURRENT_NUMBER = undefined;
    CURRENT_OPERATOR = undefined;
    OPERAND = undefined;
    decimalCount = 0;
}

clearBtn.addEventListener('click', () => {
    allClear();
});

equalsBtn.addEventListener('click', () => {

    if (CURRENT_NUMBER !== undefined && OPERAND === undefined && CURRENT_OPERATOR !== undefined) {
        assignOperand();
        clearDisplay()
        updateResult();

        CURRENT_OPERATOR = undefined;
        OPERAND = undefined;

        console.log(`equals`);
        console.log(`current number: ${CURRENT_NUMBER}`);
        console.log(`current operator: ${CURRENT_OPERATOR}`);
        console.log(`current operand: ${OPERAND}`);
    }
});