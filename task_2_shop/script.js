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
    price: 50,
    quantity: 50
  },
  {
    item: "pencil",
    price: 30,
    quantity: 25
  },
  {
    item: "eraser",
    price: 15,
    quantity: 5
  },
  {
    item: "paper",
    price: 20,
    quantity: 500
  }
];

function countBasketPrice(basket) {
  let result = 0;
  for (let value of basket) {
    result += value['price'] * value['quantity'];
  }
  return result;
}

console.log(countBasketPrice(basket));
