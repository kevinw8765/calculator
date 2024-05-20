let firstOperator = null;
let secondOperator = null;
let firstOperand = null;
let secondOperand = null;
let result = null;
let displayValue = '0';

function add(n1, n2) {
    return n1 + n2;
}

function subtract(n1, n2) {
    return n1 - n2;
}

function multiply(n1, n2) {
    return n1 * n2;
}

function divide(n1, n2) {
    return n1 / n2;
}

function operate(n1, operator, n2) {

    if(operator == "+")
    {
        result = add(n1, n2);
    }
    else if(operator == "-")
    {
        result = subtract(n1, n2);
    }
    else if(operator == "*") 
    {
        result = multiply(n1, n2);
    }
    else if(operator == "/")
    {
        result = divide(n1, n2);
    }
    else
    {
        console.log("INVALID OPERATOR");
    }
    return result;
}

const display = document.querySelector(".display")
function updateDisplay() {
    display.textContent = displayValue;
    if(displayValue.length > 9)
    {
        display.textContent = displayValue.substring(0,9);
    }
}
updateDisplay();


const buttons = document.querySelectorAll("button");
function clickButton() 
{
    for(let i = 0; i < buttons.length; i++)
    {
        buttons[i].addEventListener("click", function() {
           
            if(buttons[i].classList.contains("operator"))
            {
                inputOperator(buttons[i].textContent);
                updateDisplay();
            }
            else if(buttons[i].classList.contains("equals"))
            {
                inputEquals(buttons[i].textContent);
                updateDisplay();
            }
            else if(buttons[i].classList.contains("clear"))
            {
                clearDisplay();
                updateDisplay();
            }
            else
            {
                inputOperand(buttons[i].textContent)
                updateDisplay();
            }
        })
    }
}

clickButton();

function inputOperand(operand)
{
    if(firstOperator === null)
    {
        if(displayValue == '0')
        {
            displayValue = operand; // 1st click
        } else if(displayValue == firstOperand) //idk
        {
            displayValue = operand;
        }
        else 
        {
            displayValue += operand;
        }
    } else {
        if(displayValue == firstOperand)
        {
            displayValue = operand;
        }
        else
        {
            displayValue += operand;
        }
    }
}

function inputOperator(operator)
{
    if(firstOperator != null && secondOperator == null) // there is a first operator already
    {
        secondOperator = operator;
        secondOperand = displayValue;
        result = operate(Number(firstOperand), firstOperator, Number(secondOperand));
        displayValue = result.toString();
        firstOperand = displayValue;
        result = null;
    }
    else if(firstOperator != null && secondOperator != null)
    {
        secondOperand = displayValue;
        result = operate(Number(firstOperand), secondOperator, Number(secondOperand));
        secondOperator = operator; 
        displayValue = result.toString();
        firstOperand = displayValue; // change to new
        result = null;
    }
    else
    {
        firstOperator = operator;
        firstOperand = displayValue;
    }
}

function inputEquals()
{
    if(firstOperator == null)
    {
        displayValue = displayValue;
    }
    else if(secondOperator != null)
    {
        secondOperand = displayValue;
        result = operate(Number(firstOperand), secondOperator, Number(secondOperand))
        displayValue = result.toString();
        firstOperand = displayValue;
        secondOperand = null;
        firstOperator = null;
        secondOperator = null;
        result = null;
    }
    else
    {
        //first operation
        secondOperand = displayValue;
        result = operate(Number(firstOperand), firstOperator, Number(secondOperand))
        displayValue = result.toString();
        firstOperand = displayValue;
        secondOperand = null;
        firstOperator = null;
        secondOperator = null;
        result = null;
    }
}

function clearDisplay()
{
    firstOperator = null;
    secondOperator = null;
    firstOperand = null;
    secondOperand = null;
    result = null;
    displayValue = '0';
}