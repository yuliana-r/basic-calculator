let CURRENT_NUMBER;
let CURRENT_OPERATOR;
let OPERAND;
let RESULT;
let operatorIsPressed = false;

const display = document.getElementById('display');
const clearBtn = document.getElementById('clear');
const numberBtn = document.querySelectorAll('.number');
const operatorBtn = document.querySelectorAll('.operator');

clearBtn.addEventListener('click', () => {
    clearDisplay();
});

const equals = document.getElementById('equals');
equals.addEventListener('click', () => {

    if (CURRENT_NUMBER !== undefined && OPERAND === undefined && CURRENT_OPERATOR !== undefined) {

        OPERAND = +display.textContent;
        display.textContent = '';

        // RESULT = operate(+CURRENT_NUMBER, +OPERAND, CURRENT_OPERATOR);
        // CURRENT_NUMBER = +RESULT;
        // display.textContent = CURRENT_NUMBER;

        updateResult();
        
        CURRENT_OPERATOR = undefined;
        OPERAND = undefined;

        console.log(`equals`);
        console.log(`current number: ${CURRENT_NUMBER}`);
        console.log(`current operator: ${CURRENT_OPERATOR}`);
        console.log(`current operand: ${OPERAND}`);
    }
});

numberBtn.forEach(button => {
    button.addEventListener('click', () => {
        if (display.textContent == CURRENT_NUMBER || display.textContent == OPERAND) {
            display.textContent = '';
            display.textContent = (display.textContent + button.getAttribute('data-value')).substring(0, 11);
        } else {
            display.textContent = (display.textContent + button.getAttribute('data-value')).substring(0, 11);
        }
    })
})

// operatorBtn.forEach(button => {
//     button.addEventListener('click', () => {

//         if (OPERAND !== undefined && CURRENT_OPERATOR !== undefined) {

//             RESULT = operate(+CURRENT_NUMBER, +OPERAND, CURRENT_OPERATOR);
//             CURRENT_NUMBER = +RESULT;
//             display.textContent = CURRENT_NUMBER;
//             OPERAND = undefined;
//             CURRENT_OPERATOR = undefined;


//         } else if (CURRENT_NUMBER !== undefined && OPERAND === undefined && CURRENT_OPERATOR !== undefined) {
//             OPERAND = +display.textContent;
//             display.textContent = '';
//             RESULT = operate(+CURRENT_NUMBER, +OPERAND, CURRENT_OPERATOR);
//             CURRENT_NUMBER = +RESULT;
//             display.textContent = CURRENT_NUMBER;
//             CURRENT_OPERATOR = button.getAttribute('data-value');
//             OPERAND = undefined;

//         } else {

//             CURRENT_NUMBER = +display.textContent;
//             CURRENT_OPERATOR = button.getAttribute('data-value');
//             display.textContent = '';
//         }
//     })
// })


operatorBtn.forEach(button => {
    button.addEventListener('click', () => {


            // if (OPERAND !== undefined && CURRENT_OPERATOR !== undefined) {

            //     // RESULT = operate(+CURRENT_NUMBER, +OPERAND, CURRENT_OPERATOR);
            //     // CURRENT_NUMBER = +RESULT;
            //     // display.textContent = CURRENT_NUMBER;

            //     updateResult();

            //     OPERAND = undefined;
            //     CURRENT_OPERATOR = undefined;
                


            //     console.log(`if #1`);
            //     console.log(`current number: ${CURRENT_NUMBER}`);
            //     console.log(`current operator: ${CURRENT_OPERATOR}`);
            //     console.log(`current operand: ${OPERAND}`);

            // } else 
            if (CURRENT_NUMBER !== undefined && OPERAND === undefined && CURRENT_OPERATOR !== undefined) {
                OPERAND = +display.textContent;
                display.textContent = '';

                // RESULT = operate(+CURRENT_NUMBER, +OPERAND, CURRENT_OPERATOR);
                // CURRENT_NUMBER = +RESULT;
                // display.textContent = CURRENT_NUMBER;

                updateResult();

                CURRENT_OPERATOR = button.getAttribute('data-value');
                OPERAND = undefined;

                console.log(`if #2`);
                console.log(`current number: ${CURRENT_NUMBER}`);
                console.log(`current operator: ${CURRENT_OPERATOR}`);
                console.log(`current operand: ${OPERAND}`);

            } else if (CURRENT_NUMBER === undefined && CURRENT_OPERATOR === undefined) {
                CURRENT_NUMBER = +display.textContent;
                CURRENT_OPERATOR = button.getAttribute('data-value');
                display.textContent = CURRENT_NUMBER;

                console.log(`if #3`);
                console.log(`current number: ${CURRENT_NUMBER}`);
                console.log(`current operator: ${CURRENT_OPERATOR}`);
                console.log(`current operand: ${OPERAND}`);

            } else if (CURRENT_NUMBER !== undefined && CURRENT_OPERATOR === undefined && OPERAND === undefined) {
                CURRENT_NUMBER = +display.textContent;
                CURRENT_OPERATOR = button.getAttribute('data-value');
                display.textContent = CURRENT_NUMBER;

                console.log(`if #4`);
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
    display.textContent = CURRENT_NUMBER;
}

function clearDisplay() {
    display.textContent = '';
    CURRENT_NUMBER = undefined;
    CURRENT_OPERATOR = undefined;
    OPERAND = undefined;
}