function clearDisplay() {
    document.getElementById('display').innerText = '0';
}

function appendCharacter(char) {
    let display = document.getElementById('display');
    if (display.innerText === '0' && char !== '.') {
        display.innerText = char;
    } else {
        display.innerText += char;
    }
}

function calculateResult() {
    let display = document.getElementById('display');
    try {
        display.innerText = eval(display.innerText);
    } catch {
        display.innerText = 'Error';
    }
}

// Add keyboard support
document.addEventListener('keydown', function(event) {
    const key = event.key;
    if (key >= '0' && key <= '9') {
        appendCharacter(key);
    } else if (key === '/' || key === '*' || key === '-' || key === '+' || key === '.') {
        appendCharacter(key);
    } else if (key === 'Enter') {
        calculateResult();
    } else if (key === 'Escape') {
        clearDisplay();
    }
});
