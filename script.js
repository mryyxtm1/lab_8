let currentOperation = null;

function selectOperation(operation) {
    currentOperation = operation;
    document.getElementById("result").textContent = `Обрана операція: ${operation}`;
}

function calculate() {
    const num1 = document.getElementById('num1').value;
    const num2 = document.getElementById('num2').value;
    const resultElement = document.getElementById('result');

    if (!currentOperation) {
        resultElement.textContent = 'Будь ласка, оберіть операцію.';
        return;
    }

    // Перевірка введених даних
    if (num1 === '' || num2 === '') {
        resultElement.textContent = 'Будь ласка, введіть обидва числа.';
        return;
    }

    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);

    if (isNaN(number1) || isNaN(number2)) {
        resultElement.textContent = 'Введіть коректні числові значення.';
        return;
    }

    let result;

    // Виконання обраної операції
    switch (currentOperation) {
        case '+':
            result = number1 + number2;
            break;
        case '-':
            result = number1 - number2;
            break;
        case '*':
            result = number1 * number2;
            break;
        case '/':
            if (number2 === 0) {
                resultElement.textContent = 'Ділення на нуль неможливе.';
                return;
            }
            result = number1 / number2;
            break;
        default:
            resultElement.textContent = 'Невідома операція.';
            return;
    }

    // Округлення до двох знаків після коми
    result = Math.round(result * 100) / 100;
    resultElement.textContent = `Результат: ${result}`;
    currentOperation = null;
}

function clearFields() {
    document.getElementById('num1').value = '';
    document.getElementById('num2').value = '';
    document.getElementById('result').textContent = '';
    currentOperation = null;
}
