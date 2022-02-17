/*
2.Продолжить работу с интернет-магазином:
2.1. В прошлом домашнем задании вы реализовали корзину на базе массивов. Какими объектами можно заменить их элементы?
2.2. Реализуйте такие объекты.
2.3. Перенести функционал подсчета корзины на объектно-ориентированную базу.
*/
const bucket = {
    items: [], // товары в корзине
    quantity: this.items.length, // количество товаров
    
    // общая сумма товаров
    totalSum() {
        let sum = null;
        for (let i = 0; i < this.items; i++) {
            sum += this.items[i].price * this.items[i].quantity;
        }
        return sum;
    },

    // добавить в корзину товар
    pushIn(item) {
        // проверка переданного аргумента на соответсвие типу item. Как организовывается?
        this.items.push(item);
    },

    // удалить товар из корзины
    popIt(item) {
        if (this.items.includes(item)) { // проверка на наличие данного аргумента в корзине
            this.items.pop(item);
        } else {
            console.log('ValueError!');
        }
    },
};

// товар
const item = {
    name: null, // наименование
    price: null, // цена
    quantity: null, // количество
};
