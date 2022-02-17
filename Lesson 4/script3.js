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
delete myCar.color;
console.log(myCar);
