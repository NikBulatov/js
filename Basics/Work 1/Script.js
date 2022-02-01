let name = prompt('Ваше имя?'); // запрашиваем имя
let date1 = +prompt('Ваш год рождения? '); // запрашиваем год рождения
let date2 = +prompt('Введите текущий год'); // текущий год
let result = date2 - date1 + 1; // вычисляем возраст в следующем году
if (result < 120 && result > 0) {
alert('Привет, ' + name + '.' + ' Вам в следующем году исполнится ' + result + '!'); 
} else  {
let question = confirm('Вы человек?');
if (question === false) {
alert (name + ', не знаю что вы такое, но вам в следующем году ' + result)
} else {
alert ('Вы меня обманываете! Попробуйте ещё раз');
}
}
