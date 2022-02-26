/*
6. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation),
где arg1, arg2 – значения аргументов, operation – строка с названием операции.
В зависимости от переданного значения операции выполнить одну из арифметических операций
(использовать функции из пункта 5) и вернуть полученное значение (использовать switch).
 */
function operation(a, b, action) {
    switch (action) {
        case '+':
            return sum(a, b);
        case '-':
            return sub(a, b);
        case '*':
            return mul(a, b);
        case '/':
            return div(a, b);
        case '**':
            return pow(a, b);
        default:
            return 'Wrong operation!'
    }
};
function sum(a, b) {
    return a + b;
};

function sub(a, b) {
    return a - b;
};

function mul(a, b) {
    return a * b;
};

function div(a, b) {
    return a / b;
};
function pow(a, b) {
    return a ** b;
}

let a = +prompt('The first operand: ');
let b = +prompt('The second operand: ');
let action = prompt('Input operation: ');
alert(operation(a, b, action));