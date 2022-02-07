// массивы - частный случай объекта (ключ - индекс, значение - элемент массива
let arr = Array(10, 45, 5, 5);
let arr2 = [];
console.log(arr, arr2);

// длина
console.log(arr2.length);
arr2.length = 10; // контролировать количество элементов в массиве
console.log(arr2.length, arr2); // 10 empty items

console.log(arr.length); // длина до
arr.length = 10; // устанавливаем длину массива
console.log(arr, arr.length); // длина после

console.log(arr[2]); //обращение по индексу
arr[20] = 'qwerty'; // автоматически увеличится длина массива
console.log(arr.length, arr);

let arrs = [
    [1, 5.6, true, 'str'],
    [34, false, Infinity, null],
    [true, 'strs', NaN, 90.],
];
console.log(arrs);
console.log(arrs[2][1]);

for (let i = 0; i < arrs.length; i++) {
    console.log(arr[i]);
}
// методы массива
// перебор
arrs.forEach((item, index, array) => {
    console.log('Index: ', index, ' value: ', item, 'source array: ', array);
});
// for in перебор по ключам
for (const k in arr) {
    console.log(arr[k]);
}
// for of перебор по значению
for (const value of arr) {
    console.log(value);
}
// TODO: find information about find(), some(), indexOf(), reduce(), map(), filter(), includes()

// редактирование массива
let _array = [34, false, Infinity, null];
console.log(_array.push(NaN)); // добавляет элемент в конец массива и возвращает длину
console.log(_array);
console.log(_array.unshift('begin')); // добавляет элемент в начало массива и возвращает длину
console.log(_array);
console.log(_array.pop()); // удаляет последний элемент и возвращает его
console.log(_array.shift()); // удаляет первый элемент и возвращает его
delete _array[1]; // удалит значение у ключа 1, ДЛИНА НЕ МЕНЯЕТСЯ.
console.log(_array); // [ 34, <1 empty item>, Infinity, null ]
console.log(_array.splice(2, 2, 'qwerty'), _array); // удаляет элемент с позиции и возвращает его
console.log(_array.splice(2, 0, 'qwerty'), _array); // вставляет элемент в позицию не возвращает ничего
console.log(_array.slice(0), _array); // срез возвращает
// Копия массива
let arrCopy = _array; // новая переменная не создаётся. Новая коробка для старой коробки
console.log(arrCopy);
console.log(arrCopy === _array);