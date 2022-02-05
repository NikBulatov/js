/*
5. Реализовать основные 4 арифметические операции в виде функций с двумя параметрами.
Обязательно использовать оператор return.
*/
function sum(a, b) {
    return a + b
}

function sub(a, b) {
    return a - b
}

function mul(a, b) {
    return a * b
}

function div(a, b) {
    return a / b
}

let a = +prompt('The first number: ');
let b = +prompt('The second number: ');

alert(sum(a, b));
alert(sub(a, b));
alert(mul(a, b));
alert(div(a, b));
