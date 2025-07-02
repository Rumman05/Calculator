// Calculator Script - Now with decimals, backspace, and keyboard support!

// Create the main calculator container
const calculator = document.createElement("div");
calculator.className = "calculator";

// Create the display screen
const display = document.createElement("input");
display.type = "text";
display.readOnly = true;
display.className = "display";

// Variables to track our calculation state
let currentInput = "";
let previousInput = "";
let operator = "";

// Math functions - does the actual calculations
function calculate(prev, curr, op) {
    const prevNum = parseFloat(prev);
    const currNum = parseFloat(curr);
    
    switch(op) {
        case "+":
            return prevNum + currNum;
        case "-":
            return prevNum - currNum;
        case "x":
            return prevNum * currNum;
        case "/":
            // Avoid division by zero
            if (currNum === 0) {
                return "Error";
            }
            return prevNum / currNum;
        default:
            return currNum;
    }
}

// Handles when user clicks an operator (+, -, x, /)
function handleOperator(newOperator) {
    if (currentInput === "") return;
    
    // If we already have an operation pending, calculate it first
    if (previousInput !== "" && operator !== "") {
        const result = calculate(previousInput, currentInput, operator);
        if (result === "Error") {
            display.value = "Error";
            clearCalculator();
            return;
        }
        display.value = result;
        previousInput = result.toString();
        currentInput = "";
        operator = newOperator;
    } else {
        // Starting a new operation
        previousInput = currentInput;
        currentInput = "";
        operator = newOperator;
    }
}

// Handles number input (0-9)
function handleNumber(num) {
    currentInput += num;
    display.value = currentInput;
    updateDecimalButton(); // Check if we should enable/disable decimal button
}

// Handles decimal point input
function handleDecimal() {
    // Only add decimal if there isn't one already
    if (!currentInput.includes(".")) {
        currentInput += ".";
        display.value = currentInput;
        updateDecimalButton(); // Disable decimal button now
    }
}

// Updates decimal button state (enabled/disabled)
function updateDecimalButton() {
    const decimalBtn = document.querySelector('.decimal-btn');
    if (decimalBtn) {
        decimalBtn.disabled = currentInput.includes(".");
    }
}

// Handles backspace - removes last character
function handleBackspace() {
    if (currentInput.length > 0) {
        currentInput = currentInput.slice(0, -1);
        display.value = currentInput;
        updateDecimalButton(); // Update decimal button state
    }
}

// Clears everything
function clearCalculator() {
    currentInput = "";
    previousInput = "";
    operator = "";
    display.value = "";
    updateDecimalButton();
}

// Handles equals button
function handleEquals() {
    if (previousInput !== "" && currentInput !== "" && operator !== "") {
        const result = calculate(previousInput, currentInput, operator);
        if (result === "Error") {
            display.value = "Error";
            clearCalculator();
            return;
        }
        display.value = result;
        currentInput = result.toString();
        previousInput = "";
        operator = "";
        updateDecimalButton();
    }
}

// Dark mode functionality
let isDarkMode = false;

function toggleDarkMode() {
    isDarkMode = !isDarkMode;
    document.body.classList.toggle('dark-mode', isDarkMode);
    
    // Update the dark mode button icon
    const darkModeBtn = document.querySelector('.dark-mode-btn');
    darkModeBtn.textContent = isDarkMode ? '☀️' : '🌙';
    
    // Save preference to localStorage if available (though we can't use it in artifacts)
    // In a real implementation, you'd save this preference
}

// Create dark mode toggle button
const darkModeButton = document.createElement("button");
darkModeButton.textContent = "🌙";
darkModeButton.className = "dark-mode-btn";
darkModeButton.title = "Toggle Dark Mode";
darkModeButton.addEventListener("click", toggleDarkMode);

// Add keyboard support for dark mode (Ctrl/Cmd + D)
document.addEventListener('keydown', function(event) {
    const key = event.key;
    
    // Existing keyboard shortcuts...
    if (key >= '0' && key <= '9') {
        handleNumber(key);
    }
    else if (key === '+') {
        handleOperator('+');
    }
    else if (key === '-') {
        handleOperator('-');
    }
    else if (key === '*') {
        handleOperator('x');
    }
    else if (key === '/') {
        event.preventDefault();
        handleOperator('/');
    }
    else if (key === '.') {
        handleDecimal();
    }
    else if (key === 'Enter' || key === '=') {
        handleEquals();
    }
    else if (key === 'Backspace') {
        handleBackspace();
    }
    else if (key === 'Escape' || key.toLowerCase() === 'c') {
        clearCalculator();
    }
    // New: Dark mode toggle with Ctrl/Cmd + D
    else if ((event.ctrlKey || event.metaKey) && key.toLowerCase() === 'd') {
        event.preventDefault();
        toggleDarkMode();
    }
});

// Now let's build the visual calculator interface
const mainContent = document.createElement("div");
mainContent.className = "main-content";

// Container for all the number buttons and special buttons
const numbersContainer = document.createElement("div");
numbersContainer.className = "numbers-container";

// Grid for numbers 1-9
const numberGrid = document.createElement("div");
numberGrid.className = "number-grid";

// Create number buttons 1-9
for (let i = 1; i <= 9; i++) {
    const button = document.createElement("button");
    button.textContent = i;
    button.addEventListener("click", () => handleNumber(i.toString()));
    numberGrid.appendChild(button);
}

// Bottom row with special buttons
const bottomRow = document.createElement("div");
bottomRow.className = "bottom-row";

// Clear button
const clearButton = document.createElement("button");
clearButton.textContent = "C";
clearButton.className = "clear-btn";
clearButton.addEventListener("click", clearCalculator);

// Zero button
const zeroButton = document.createElement("button");
zeroButton.textContent = "0";
zeroButton.className = "zero-btn";
zeroButton.addEventListener("click", () => handleNumber("0"));

// Decimal point button
const decimalButton = document.createElement("button");
decimalButton.textContent = ".";
decimalButton.className = "decimal-btn";
decimalButton.addEventListener("click", handleDecimal);

// Equals button
const equalsButton = document.createElement("button");
equalsButton.textContent = "=";
equalsButton.className = "equals-btn";
equalsButton.addEventListener("click", handleEquals);

// Add buttons to bottom row
bottomRow.appendChild(clearButton);
bottomRow.appendChild(zeroButton);
bottomRow.appendChild(decimalButton);
bottomRow.appendChild(equalsButton);

// Put the number grid and bottom row together
numbersContainer.appendChild(numberGrid);
numbersContainer.appendChild(bottomRow);

// Operator panel on the right side
const operatorPanel = document.createElement("div");
operatorPanel.className = "operator-panel";

// Addition button
const addButton = document.createElement("button");
addButton.textContent = "+";
addButton.addEventListener("click", () => handleOperator("+"));

// Subtraction button
const subButton = document.createElement("button");
subButton.textContent = "-";
subButton.addEventListener("click", () => handleOperator("-"));

// Multiplication button
const multButton = document.createElement("button");
multButton.textContent = "x";
multButton.addEventListener("click", () => handleOperator("x"));

// Division button
const divButton = document.createElement("button");
divButton.textContent = "/";
divButton.addEventListener("click", () => handleOperator("/"));

// Backspace button
const backspaceButton = document.createElement("button");
backspaceButton.textContent = "⌫";
backspaceButton.className = "backspace-btn";
backspaceButton.addEventListener("click", handleBackspace);

// Add all buttons to operator panel
operatorPanel.appendChild(addButton);
operatorPanel.appendChild(subButton);
operatorPanel.appendChild(multButton);
operatorPanel.appendChild(divButton);
operatorPanel.appendChild(backspaceButton);

// Put everything together
mainContent.appendChild(numbersContainer);
mainContent.appendChild(operatorPanel);

calculator.appendChild(display);
calculator.appendChild(mainContent);

// Create title header
const header = document.createElement("div");
header.className = "header";

const title = document.createElement("h1");
title.textContent = "Welcome to my Calculator!";
title.className = "calculator-title";

header.appendChild(title);

// Create footer with copyright and GitHub link
const footer = document.createElement("div");
footer.className = "footer";

const copyright = document.createElement("p");
copyright.className = "copyright";
copyright.innerHTML = "© 2025 Muhammad Rumman. All rights reserved.";

const githubLink = document.createElement("a");
githubLink.href = "https://github.com/Rumman05/Calculator";
githubLink.textContent = "View on GitHub";
githubLink.className = "github-link";
githubLink.target = "_blank"; // Opens in new tab

footer.appendChild(copyright);
footer.appendChild(githubLink);

// Add everything to the page in order
document.body.appendChild(header);
document.body.appendChild(calculator);
document.body.appendChild(footer);
document.body.appendChild(darkModeButton);

// Initialize the decimal button state
updateDecimalButton();