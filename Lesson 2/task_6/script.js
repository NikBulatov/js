/*
6. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation),
где arg1, arg2 – значения аргументов, operation – строка с названием операции.
В зависимости от переданного значения операции выполнить одну из арифметических операций
(использовать функции из пункта 5) и вернуть полученное значение (использовать switch).
 */
function operation(a, b, action) {
    switch (action) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            return a / b;
        case '**':
            return a ** b;
        default:
            return 'Wrong operation!'
    }
}

let a = +prompt('The first operand: ');
let b = +prompt('The second operand: ');
let action = prompt('Input operation: ');
alert(operation(a, b, action));