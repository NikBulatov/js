let input = prompt('Введите суммы покупок через запятую');
let array = input.split(',');
let numbers = array.map(
  function numbers(element) {
  return parseFloat(element);
  }
);
let result = 0;
for (let i = 0; i < numbers.length; i++){
result = result + numbers[i];
  console.log(result);
} alert('Сумма ваших покупок составляет: ' + result +' рублей.');