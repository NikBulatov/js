"use strict";
const notebook = {
    id: 321,
    name: 'NoteBook',
    price: 45690,
    quantity: 1,
};
const mouse = {
    id: 369,
    name: 'Mouse',
    price: 1500,
    quantity: 1,
}
const keyboard = {
    id: 987,
    name: 'Keyboard',
    price: 2500,
    quantity: 1,
}

const catalog = {
    catalogBlock: null,
    cart: null,
    list: [notebook, mouse, keyboard],

    init(catalogClassBlock, cart) {
        this.catalogBlock = document.querySelector(`.${catalogClassBlock}`);
        this.cart = cart;
        this.render();
        this.addEventHandlers();
    },

    render() {
        if (this.list.length > 0) {
            this.renderCatalogList();
        } else {
            this.renderEmptyCatalog();
        }
    },

    addEventHandlers() {
        this.catalogBlock.addEventListener('click', event => this.addToBasket(event));
    },

    addToBasket(event) {
        if (!event.target.classList.contains('product__add-to-cart')) return;
        const id_product = +event.target.dataset.id_product;
        const productToAdd = this.list.find((product) => product.id === id_product);
        this.cart.addToBasket(productToAdd);
    },

    renderCatalogList() {
        this.catalogBlock.innerHTML = '';
        this.list.forEach(item => {
            this.catalogBlock.insertAdjacentHTML('beforeend', this.renderCatalogItem(item));
        });
    },

    renderCatalogItem(item) {
        return `<div class="product">
                <h3>${item.name}</h3>
                <p>${item.price} RUB</p>
                <button class="product__add-to-cart" data-id_product="${item.id}">Add to cart</button>
            </div>`;
    },

    renderEmptyCatalog() {
        this.catalogBlock.innerHTML = '';
        this.catalogBlock.textContent = 'Catalog is empty';
    },
};


const cart = {
    cartBlock: null,
    clrCartButton: null,
    goods: [notebook],

    init(cartBlockClass, clrCartButton) {
        this.cartBlock = document.querySelector(`.${cartBlockClass}`);
        this.clrCartButton = document.querySelector(`.${clrCartButton}`);

        this.addEventHandlers();
        this.render();
    },

    addEventHandlers() {
        this.clrCartButton.addEventListener('click', this.clearCart.bind(this));
    },

    clearCart() {
        this.goods = [];
        this.render();
    },

    render() {
        if (this.goods.length > 0) {
            this.renderCartList();
        } else {
            this.renderEmptyCart();
        }
    },

    addToBasket(product) {
        if (product) {
            const isInBasket = this.goods.find((item) => product.id === item.id);
            if (isInBasket) {
                isInBasket.quantity++;
            } else {
                this.goods.push({...product, quantity: 1});
            }
            this.render();
        } else {
            alert('Value Error!');
        }
    },

    renderEmptyCart() {
        this.cartBlock.innerHTML = '';
        this.cartBlock.textContent = 'Cart is empty';
    },

    renderCartList() {
        this.cartBlock.innerHTML = '';
        this.goods.forEach(item => {
            this.cartBlock.insertAdjacentHTML('beforeend', this.renderCartItem(item));
        });
    },

    renderCartItem(item) {
        return `<div>
                <h3>${item.name}</h3>
                <p>${item.price} RUB</p>
                <p>${item.quantity} items</p>
            </div>`;
    },
};

catalog.init('catalog', cart);
cart.init('cart', 'clr-cart');
