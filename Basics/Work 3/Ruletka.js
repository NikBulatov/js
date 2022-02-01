let balance = 1000;
var money;
function colorGenerate() { // пишем код для генерации случайного цвета
let color;
let c = Math.round(Math.random() * 1); 
    if (c == 1) {
        color = 'black';
    } else {
        color = 'red';
    } return color;
}
while (balance > 0) { 
    do {
    var deposite = prompt('У вас на балансе ' + balance + ' кредитов. Ваша ставка? Они не должна превышать ваш баланс! Для выхода введите quit'); // запрашиваем ставку
    var money = balance; // переменная для цикла
    if (deposite == 'quit') { // если захотел выйти, то стоп
        break;}
        if (deposite > balance){
            alert ('Вы не можете сделать ставку больше вашего баланса');
        }
    } while (deposite > balance);
    if (deposite == 'quit') { // если захотел выйти, то стоп
        break;
        }
    let number = prompt('Введите число от 0 до 36 включительно');
    let b = Math.round(Math.random() * 36);
    let color = prompt('Цвет: ' + 'black ' + 'или ' + 'red'); //запрашиваем цвет
    let a = colorGenerate();
    if (color == a) {
        balance = balance + (deposite * 2);
      console.log(a);
    } else if (b == number) {
        balance = balance + (deposite * 35);
      console.log(b);
    } else 
      balance = balance - deposite;
   let win = balance - money;
   alert ('Ваша ставка: ' + deposite + ' Выпало: цвет: ' + a + ', число: ' + b + ' Размер выигрыша: ' + win + ' Ваш баланс: ' + balance);
  console.log(balance);
  console.log(deposite);
  console.log(win);
   if (balance === 0) {
     alert ('Спасибо за игру!');
  break;
   }
}
