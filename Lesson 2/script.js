let goodsCount = 10;
// if else не возвращает результат
if (goodsCount > 0) {
    console.log(`Amount of goods is: ${goodsCount}`);
} else {
    console.log('Корзина пуста');
}

// Тернарный оператор возвращает результат работы
goodsCount = 0
if (goodsCount > 0) console.log(`Amount of goods is: ${goodsCount}`);
else console.log('Корзина пуста');
// Лаконичный вариант
goodsCount > 0 // условие
    ? console.log(`Amount of goods is: ${goodsCount}`) // True
    : console.log('Корзина пуста'); // False

// the best variant. Заносим результат работы оператора в переменную
goodsCount = 10
const message = goodsCount > 0
    ? `Amount of goods is: ${goodsCount}`
    : 'Корзина пуста'
console.log(message);

let good = 'Banana';

// так не надо
// if (good === 'Banana') {
//     console.log('Cost is 0.5$');
// } else {
//     if (good === 'Mango') {
//         console.log('Cost is 0.8$');
//     } else {
//         if (good === 'Apple' || good === 'Pear') {
//             console.log('Cost is 0.4$');
//         } else {
//             console.log('Unknown good');
//         }
//     }
// }

// Вот так надо
if (good === 'Banana') {
    console.log('Cost is 0.5$');
} else if (good === 'Mango') {
    console.log('Cost is 0.8$');
} else if (good === 'Apple' || good === 'Pear') {
    console.log('Cost is 0.4$');
} else {
    console.log('Unknown good');
}

// switch оператор
good = 'Pear';
switch (good) {
    case 'Banana':
        console.log('Cost is 0.5$');
        break;
    case 'Mango':
        console.log('Cost is 0.8$');
        break;
    case 'Pear': // 'Apple' || 'Pear' - ленивое или сработает только если первое будет True
    case 'Apple':
        console.log('Cost is 0.4$');
        break;
    default:
        console.log('Unknown fruit');
}

// Functions
function sayCost(good) {
    switch (good) {
        case 'Banana':
            console.log('Cost is 0.5$');
            break;
        case 'Mango':
            console.log('Cost is 0.8$');
            break;
        case 'Pear':
        case 'Apple':
            console.log('Cost is 0.4$');
            break;
        default:
            console.log('Unknown fruit');
    }
}

sayCost('Mango');

function sayPrice(price ='undefined') {
    console.log(`Prise is: ${price}`);
}
sayPrice(456);
sayPrice();

function getGoodPrice(good) {
    switch (good) {
        case 'Banana':
            return 0.5;
        case 'Mango':
            return 0.8;
        case 'Pear':
        case 'Apple':
            return 0.4;
        default:
            return null;
    }
}
 const result = getGoodPrice();
// result is not null? True : False
(result != null) ? console.log('OK') : console.log('Error');

function getGoodsPriceByCount(good, count = 1) {
    const priceByGoodItem = getGoodPrice(good);
    if (priceByGoodItem == null) return null;
    return priceByGoodItem * count;
}

console.log(getGoodsPriceByCount('Banana', 10));
console.log(getGoodsPriceByCount('Pear', 5));
console.log(getGoodsPriceByCount('Apple', 7));
console.log(getGoodsPriceByCount('Mango', 1));

// Function Declaration - объявляется в windows scope (глобально). Сначала регистрация переменных, затем выполнение кода
foo(); // OK
function foo() {
    console.log('Test');
}
foo(); // OK

// Function Expression - Функциональное выражение.
// fooo(); // error undefined if through var. Error is not a function if through const
const fooo = function () {
    console.log('foo');
}
fooo(); // OK

// Стрелочная функция
const foooo = () => {
    console.log('foooo');
}
// Agruments of functions
const fa = function () {
    console.log(arguments);
}
fa(1, 'wert', true);

// Recursion
function recursion(n) {
    if (n <= 0 || !Number.isInteger(n)) return 'Input an integer > 0'
    if (n === 1) return 1;
    return n * recursion(n - 1)
}
console.log(recursion(4));