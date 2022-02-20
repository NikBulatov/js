function start() {
    sayHello();
    bye();
}
function sayHello() {
    alert('Hello!')
}
function bye() {
    alert('Bye!')
}

const btn = document.querySelector('button');
// btn.onclick = start;
// будет заполняться очередь вызываемых объектов. 
btn.addEventListener('click', function () { console.log('Hello!!!'); });
btn.addEventListener('click', sayHello);
btn.addEventListener('click', bye);

btn.removeEventListener('click', bye); // передаётся ссылка на функцию
// события документа
// load - готова разметка и загружено всё содержимое страницы. Сработает последним
window.addEventListener('load', function () {
    // ...
});
// сработает после пострения DOM  (как defer)
window.addEventListener('DOMContentLoaded', function () {
    // ...
});
// сработает до загрузки контента
window.addEventListener('beforeunload', function () {
    // ...
});
