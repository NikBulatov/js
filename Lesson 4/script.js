// const obj = {}; // объект
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
}
console.log(newCar);
newCar.beep();
