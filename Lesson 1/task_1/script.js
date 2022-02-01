/*
1. Задать температуру в градусах по Цельсию. Вывести в alert соответствующую температуру в градусах по Фаренгейту. 
Подсказка: расчёт идёт по формуле: Tf = (9 / 5) * Tc + 32, где 
Tf – температура по Фаренгейту, 
Tc – температура по Цельсию
 */

function fahrenheit(value) {
    let result;
    result = (9 / 5) * value + 32;
    return result;
}

let temp = +prompt('Input value in Celsius: ');
alert(`Celsius: ${temp}\nFahrenheit: ${fahrenheit(temp)}`);