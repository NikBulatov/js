// const obj = {}; // объект, НЕ СЛОВАРЬ!
const obj = new Object();
// console.log(obj);
function getPropName(someData) {
    return someData + 'test';
}

const myCar = {
    manufacture: 'Toyota',
    color: 'black',
    'property with space': 'Lol',
    [getPropName('some')]: '123',
    [1 + 1]: '1234',
};
console.log(myCar);

myCar.color = 'Yellow';
myCar["property with space"] = false;

console.log(myCar);

const newCar = {
    manufacture: 'Toyota',
    color: 'black',
    engine: {
        power: 200,
        code: 'FJO'
    },
    possibleColors: ['black', 'white', 'blue'],
    // beep: function() {
    //     console.log('Beep-Beeeep!');
    // },
    beep() {
        console.log('Beep-Beeeep!');
    },
    [Symbol.iterator]: function* () { // make object iterable
        for (const property in newCar) {
            yield newCar[property];
        }

    } 
};
console.log(newCar);
newCar.beep();

for (let i = 0; i < newCar.possibleColors.length; i++) {
    console.log(newCar.possibleColors[i]);
};

// keys of object
const carKeys = Object.keys(newCar);
for (let i = 0; i < carKeys.length; i++) {
    console.log(newCar[carKeys[i]]);
};

// better variant
for (const property in newCar) {
    console.log(property, newCar[property]);
};
for (const value of newCar) {
    console.log(value);
};
