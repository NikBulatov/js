/* 1. Написать функцию, преобразующую число в объект. 
* Передавая на вход число от 0 до 999, мы должны получить на выходе объект, в котором в соответствующих свойствах описаны единицы, 
* десятки и сотни. Например, для числа 245 мы должны получить следующий объект: {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}. 
* Если число превышает 999, необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.
*/

function digitsNumber(number) {
    if (number <= 999 && number >= 0) {
        let unit = number % 10;
        let ten = Math.floor(number % 100 / 10);
        let hundred = Math.floor(number / 100);

        const digits = {
            'units': unit,
            'tens': ten,
            'hundreds': hundred,
        };

        return digits;
    }
    else {
        console.log('Input a number from 0 to 999!');
        return {}
    }
};

let num = 0;
console.log(digitsNumber(num));
