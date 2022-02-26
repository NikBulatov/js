/*
2. Сделать генерацию корзины динамической: верстка корзины не должна находиться в HTML-структуре. 
Там должен быть только div, в который будет вставляться корзина, сгенерированная на базе JS:
    2.1. Пустая корзина должна выводить строку «Корзина пуста»;
    2.2. Наполненная должна выводить «В корзине: n товаров на сумму m рублей».
*/
const notebook = {
    id: 001,
    name: 'NoteBook',
    price: 45690,
    quantity: 1,
};
const mouse = {
    id: 002,
    name: 'Mouse',
    price: 1500,
    quantity: 1,
}
const keyboard = {
    id: 305,
    name: 'Keyboard',
    price: 2500,
    quantity: 1,
}

const cartItem = {
    render(good) {
        return `<div class="good">
                    <div><b>Name</b>: ${good.name}</div>
                    <div><b>Price</b>: ${good.price}</div>
                    <div><b>Quantity</b>: ${good.quantity}</div>
                    <div><b>Total price</b>: ${good.quantity * good.price}</div>
                </div>`;
    }
};

const cart = {
    cartList: null,
    cartButton: null,
    cartItem,
    goods: [notebook, mouse, keyboard],
    
    init() {
        this.cartList = document.querySelector('.cart-list');
        this.cartButton = document.querySelector('.cart-btn');
        this.cartButton.addEventListener('click', this.clearCart.bind(this));

        this.render();
    },
    render() {
        if (this.goods.length) {
            this.goods.forEach(good => {
                this.cartList.insertAdjacentHTML('beforeend', this.cartItem.render(good));
            });
            this.cartList
                .insertAdjacentHTML('beforeend', `${this.goods.length} items are in cart, total price is ${this.getTotalPrice()}`);
        } else {
            this.cartList.textContent = 'Empty cart';
        }
    },
    getTotalPrice() {
        return this.goods.reduce(function (price, good) {
            return price + good.price * good.quantity;
        }, 0);
    },
    clearCart() {
        this.goods = [];
        this.render();
    },
};

cart.init();
