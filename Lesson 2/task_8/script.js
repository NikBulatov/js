// 8. *С помощью рекурсии организовать функцию возведения числа в степень.
// Формат: function power(val, pow), где val – заданное число, pow – степень.
function power(val, pow) {
    if (pow === 0) return 1;
    if (pow === 1) return val;
    return power(val, pow - 1) * val
}

console.log(power(5, 0));
console.log(power(5, 1));
console.log(power(5, 4));