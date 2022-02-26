/*
1. Доработать модуль корзины.
a. Добавлять в объект корзины выбранные товары по клику на кнопке «Купить» без перезагрузки страницы
b. Привязать к событию покупки товара пересчет корзины и обновление ее внешнего вида
*/
// const notebook = {
//     id: 001,
//     name: 'NoteBook',
//     price: 45690,
//     quantity: 1,
// };
// const mouse = {
//     id: 002,
//     name: 'Mouse',
//     price: 1500,
//     quantity: 1,
// }
// const keyboard = {
//     id: 003,
//     name: 'Keyboard',
//     price: 2500,
//     quantity: 1,
// }
const catalog = {


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
    cartButtonClear: null,
    cartItem,
    goods: [],

    init() {
        this.cartList = document.querySelector('.cart-list');
        this.cartButtonClear = document.querySelector('.cart-btn-clear');
        this.cartButton = document.querySelector('.cart-btn-add');
        this.cartButtonClear.addEventListener('click', this.clearCart.bind(this));

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
    addGood(good) {
        this.goods.push(good);
    },

};

cart.init();

// const catalog = {
//     goods: [],
//     cart: null,
//     init(cart) {
//         this.cart = cart;
//
//     },
//     addToCart(good) {
//         this.cart.addToGood(good);
//     },
//     render() {
//
//     },
// };
// catalog.init(cart);