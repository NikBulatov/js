// console.dir(document)
// console.log(windows.document)
// поиск элементов
console.log(document.getElementById('id-test'));
console.log(document.getElementsByClassName('test-class')[1]); // HTMLCollection
console.log(document.getElementsByTagName('p')); // HTMLCollection
// test-class == последний элемент в родительском классе (div)
console.log(document.querySelector('.test-class:last-child')); // HTMLCollection
console.log(document.querySelectorAll('.test-class')); // return NodeCollection (forEach aviable)

// перебор
const pTags = document.getElementsByTagName('p');
for (let i = 0; i < pTags.length; i++) { //for of
    console.log(pTags[i]); // console.dir(pTags[i]);
}

// Изменение содержимого
const h1Tag = document.querySelector('h1');
console.log(h1Tag.textContent); // Содержимое элемента
console.log(h1Tag.innerText); // Содержимое элемента не со всеми тегами работает
console.log(h1Tag.innerHTML); // Содержимое строки HTML
h1Tag.innerHTML += '<u>!</u>'; // использвоать в крайних случаях! большее, чем textContent (как код HTML) (property getter and setter)
h1Tag.textContent += '<i>!</i>'; // реально текст, вставит именно такую строку без форматирования

// вывод элементов 
// BAD VARIANT - постоянное обращение к DOM - в JS это самые затратные операции
const demo = document.querySelector('#demo');

for (let i = 0; i < 10; i++) {
    demo.innerHTML += '<div>Это элемент номер - ' + i + '</div>';
}

// GOOD - подготовка переменной (строки) и один раз взаимодействие с DOM
let htmlString = '';
for (let i = 0; i < 10; i++) {
    htmlString += '<div>Это элемент номер - ' + i + '</div>';
}
demo.innerHTML = htmlString;
// THE BEST
document.body.insertAdjacentHTML('beforebegin', '<div><i>hello!</i></div>');
document.body.insertAdjacentHTML('afterbegin', '<div><i>hello!</i></div>');
document.body.insertAdjacentHTML('beforeend', '<div><i>hello!</i></div>');
document.body.insertAdjacentHTML('afterend', '<div><i>hello!</i></div>');

// Стилизация элементов (inline-style) получение содержимого блока style
console.log(h1Tag.style); // выдать CSS свойства
h1Tag.style.backgroundColor = 'yellow';
console.log(getComputedStyle(h1Tag).back); // вывод стилей элемента (hard getter) (возвращается объект => можно обращаться через свойство .backgroundColor)

// Создание элемента HTML
const myDiv = document.createElement('div');
const i = document.createElement('i');

myDiv.className = 'my-class1 my-class2';
myDiv.classList.add('my-class3');
myDiv.classList.remove('my-class1');
myDiv.classList.toggle('visible'); // если нет - добавит, если есть - удалит

console.log(myDiv.classList.contains('my-class2'));
i.textContent = 'Hello world!';
console.log(myDiv);
console.log(i);
myDiv.appendChild(i); // добавление элемента внутрь объекта
document.body.appendChild(myDiv);

myDiv.insertBefore

const parentElement = document.getElementById('id-test');
const refElement = document.querySelector('.test-class:last-child');
// перенос элемента (первый агрумент), относительно другого элемента (второй аргумент) вставить перед (insert before)
parentElement.insertBefore(h1Tag, refElement);

// клонирование элемента
const h1TagCopy = document.querySelector('h1').cloneNode(true);

// h1Tag.remove(); // исчезнет с виду, не удалится
h1Tag.parentElement.removeChild(h1Tag);
// очистка разметки
// document.body.innerHTML = '';
console.log(h1Tag);


