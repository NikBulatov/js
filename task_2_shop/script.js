/*
2. С этого урока начинаем работать с функционалом интернет-магазина.
Предположим, есть сущность корзины.
Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров.
Товары в корзине хранятся в массиве. Задачи:
a) Организовать такой массив для хранения товаров в корзине;
b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины.
 */
let basket = [
  {
    item: "pen",
    price: getPrice(50, 50)
  },
  {
    item: "pencil",
    price: getPrice(30, 25)
  },
  {
    item: "eraser",
    price: getPrice(15, 5)
  },
  {
    item: "paper",
    price: getPrice(20, 500)
  }
];

function getPrice(price, count = 1) {
  return price * count;
}

function countBasketPrice(basket) {
  let result = 0;
  for (let value of basket) {
    result += value['price'];
  }
  return result;
}

console.log(countBasketPrice(basket));
