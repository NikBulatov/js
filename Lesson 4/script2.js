function inc(a) { // копирует значение!!!
    ++a;
}

let a = 1;
inc(a);
console.log(a); // 1

const obj = { num: 5, };

function inc2(obj) { // копирует ссылку на объект
    ++obj.num;
}
inc2(obj);

console.log(obj); // { num: 6 }

function f() {
    return {
        number: 5, 
        sayNumber() {
            // console.log('Current number: ', this.number); // Current nubmer: 5
            console.log('Current this: ', this); // Current this: 

        }
    }
};

const myObj = f();
const mySayNumber = myObj.sayNumber;
// myObj.sayNumber();
mySayNumber();
