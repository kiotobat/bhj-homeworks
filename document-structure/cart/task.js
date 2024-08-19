const arrOfProducts = [...document.querySelectorAll('.product')];

arrOfProducts.forEach((product, index) => {
    product.addEventListener('click', (event) => {
        const buttonAddToCart = document.querySelectorAll('.product__add')[index];
        const idProduct = product.closest('.product').dataset.id;

        if (event.target === buttonAddToCart) {
            addingProductToCart(idProduct, index);
        }
        else {
            plusOrMinusQuantityProduct(event.target, index);
        }
    });
});

function handlerForClickingRemoveProductBtn() {
    [...document.querySelectorAll('.cart__product-remove')].forEach(btnRemove => {
        btnRemove.addEventListener('click', () => {
            btnRemove.closest('.cart__product').remove();
        });
    });
}

function plusOrMinusQuantityProduct(eventTarget, indexProduct) {
    const buttonPlus = document.querySelectorAll('.product__quantity-control_inc')[indexProduct];
    const buttonMinus = document.querySelectorAll('.product__quantity-control_dec')[indexProduct];
    const valueOfQuantity = document.querySelectorAll('.product__quantity-value')[indexProduct];

    if (eventTarget === buttonPlus) {
        valueOfQuantity.textContent++;
    } else if (eventTarget === buttonMinus && valueOfQuantity.textContent > 1) {
        valueOfQuantity.textContent--;
    }
}

function addingProductToCart(idProduct, indexProduct) {
    const imageProduct = document.querySelectorAll('.product__image')[indexProduct].getAttribute("src"); // картинка товара
    const quantityProduct = document.querySelectorAll('.product__quantity-value')[indexProduct]; // HTML-элемент с заданным кол-вом товара

    const arrOfProductsInCart = [...document.querySelectorAll('.cart__product')]; // массив товаров в корзине

    const indexProductInCart = arrOfProductsInCart.findIndex(inCart => inCart.dataset.id === idProduct);

    if (indexProductInCart > -1) {
        const quantityProductInCart = document.querySelectorAll('.cart__product-count')[indexProductInCart]; // HTML-элемент с кол-вом товара в корзине
        quantityProductInCart.textContent = parseInt(quantityProduct.textContent) + parseInt(quantityProductInCart.textContent);
    }
    else if (indexProductInCart === -1) {
        const cartTemplate = `
    <div class="cart__product" data-id="${idProduct}">
      <img class="cart__product-image" src="${imageProduct}">
      <div class="cart__product-count">${quantityProduct.textContent}</div>
      <img src="https://img.icons8.com/?size=20&id=22922&format=png" class="cart__product-remove"></img>
    </div>`;
        const cartList = document.querySelector('.cart__products');
        cartList.insertAdjacentHTML("beforeEnd", cartTemplate);
        handlerForClickingRemoveProductBtn();
    }

    quantityProduct.textContent = 1;
}