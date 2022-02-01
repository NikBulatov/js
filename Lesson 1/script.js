function hello() {
    alert('Hello World!');
}

var a = 1; // global variable, putted in window
let b = 2; // local
const c = 3; // local
b = 123;

console.log('1\n'+'Hello world from console!');
// hello();
{
    var d = 4; // объявлена в глобальном scope
    let e = 5; // локальном scope
    console.log('2\n'+e)
}
let e = 50
console.log('3\n'+d, '\n', e);
// String
let s = "Hello!";
let y = 'Right way!';
let f = `${s}\nLike python f-sting: ${y}`
console.log(f)
console.log(10 * 'Hi!'); // => 10 * NaN => NaN (Not a Number) type number
let k = '35';
console.log(typeof k, k);
// Number
let g = 35;
console.log(typeof g, g);
console.log(parseInt(k));
console.log(parseFloat('3.14'));
console.log(0xa);
console.log(2e10);
console.log(2e-1);

function foo() {

}

console.log(typeof foo); // function
console.log(typeof []); // object
// Operations
console.log(6 + 4);
console.log(6 - 4);
console.log(6 / 4);
console.log(6 * 4);
console.log(6 % 4);
console.log(6 ** 4);

let num = 1;
console.log(num);
num += 2;
console.log(num);
num = ++num;
console.log(num);



