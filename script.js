document.addEventListener('DOMContentLoaded', function() {
    const cart = document.querySelector('.cart');
    const cartItems = document.querySelector('.cart .items');
    const cartTotal = document.querySelector('.cart .total span');
    const products = document.querySelectorAll('.product');

    let cartData = [];

    function updateCart() {
        let total = 0;
        cartItems.innerHTML = '';
        cartData.forEach(item => {
            total += item.price;
            cartItems.innerHTML += `<div>${item.name} - $${item.price}</div>`;
        });
        cartTotal.textContent = total;
    }

    function addToCart(name, price) {
        cartData.push({ name, price });
        updateCart();
    }

    products.forEach(product => {
        product.querySelector('.addtocart').addEventListener('click', function() {
            addToCart(product.querySelector('h3').textContent, product.dataset.price);
        });
    });
});
