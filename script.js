// Variáveis para armazenar os valores e a operação atual
let display = document.getElementById('display');
let currentValue = '';
let previousValue = '';
let operation = undefined;

// Função para adicionar números ao display
function appendNumber(number) {
    if (number === '.' && currentValue.includes('.')) return;
    currentValue = currentValue.toString() + number.toString();
    updateDisplay();
}

// Função para escolher a operação
function chooseOperation(op) {
    if (currentValue === '') return;
    if (previousValue !== '') {
        compute();
    }
    operation = op;
    previousValue = currentValue;
    currentValue = '';
}

// Função para realizar o cálculo
function compute() {
    let computation;
    const prev = parseFloat(previousValue);
    const current = parseFloat(currentValue);
    if (isNaN(prev) || isNaN(current)) return;
    switch (operation) {
        case '+':
            computation = prev + current;
            break;
        case '-':
            computation = prev - current;
            break;
        case '*':
            computation = prev * current;
            break;
        case '/':
            computation = prev / current;
            break;
        default:
            return;
    }
    currentValue = computation;
    operation = undefined;
    previousValue = '';
    updateDisplay();
}

// Função para limpar o display
function clearDisplay() {
    currentValue = '';
    previousValue = '';
    operation = undefined;
    updateDisplay();
}

// Função para atualizar o display
function updateDisplay() {
    display.value = currentValue;
}