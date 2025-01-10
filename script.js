

        window.fulldatalayer=window.fulldatalayer || {};
        window.fulldatalayer.page={
            pageinfo:{
            pageName : document.title,
            pageURL : window.location.href,
            pathname : window.location.pathname
    }
};


document.addEventListener('DOMContentLoaded', () => {
    const cartItems = [];
    const cartItemsElement = document.getElementById('cart-items');
    const totalElement = document.getElementById('total');

    document.querySelectorAll('.product button').forEach(button => {
        button.addEventListener('click', () => {
            const productElement = button.parentElement;
            const productName = productElement.querySelector('h3').textContent;
            const productPrice = parseFloat(productElement.querySelector('p').textContent.replace('$', ''));

            cartItems.push({ name: productName, price: productPrice });
            updateCart();
        });
    });

    function updateCart() {
        cartItemsElement.innerHTML = '';
        let total = 0;
        cartItems.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
            cartItemsElement.appendChild(li);
            total += item.price;
        });
        totalElement.textContent = total.toFixed(2);
    }
});
