let displayValue = '';

function appendToDisplay(value) {
  displayValue += value;
  document.getElementById('display').value = displayValue;
}

function clearDisplay() {
  displayValue = '';
  document.getElementById('display').value = '';
}

function operation(operator) {
  if (displayValue !== '') {
    if (displayValue.slice(-1) === '+' || displayValue.slice(-1) === '-' || displayValue.slice(-1) === '*' || displayValue.slice(-1) === '/' || displayValue.slice(-1) === '^' || displayValue.slice(-1) === '!') {
      displayValue = displayValue.slice(0, -1);
    }
    displayValue += operator;
    document.getElementById('display').value = displayValue;
  }
}

function calculate() {
  if (displayValue !== '') {
    try {
      const result = eval(displayValue);
      document.getElementById('display').value = result;
      displayValue = '';
    } catch (error) {
      document.getElementById('display').value = 'Error';
    }
  }
}

function factorial() {
  if (displayValue !== '') {
    try {
      let n = parseInt(displayValue);
      if (!isNaN(n)) {
        let result = 1;
        for (let i = 2; i <= n; i++) {
          result *= i;
        }
        document.getElementById('display').value = result;
        displayValue = '';
      } else {
        document.getElementById('display').value = 'Error';
      }
    } catch (error) {
      document.getElementById('display').value = 'Error';
    }
  }
}
function deleteLastCharacter() {
    if (displayValue.length > 0) {
      // Remove the last character from displayValue
      displayValue = displayValue.slice(0, -1);
      document.getElementById('display').value = displayValue;
    }
  }
  