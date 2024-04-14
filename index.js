// TODO: Add all products to the productList object

const productList = {
    "3": {
        "name": "Tudor Leather Messenger Bag",
        "price": "5990",
        "image": "/images/leather/products/113image.jpg"
    },
    "6": {
        "name": "The Chronicle Leather Backpack Canvas",
        "price": "8990",
        "image": "/images/leather/products/39image.jpg"
    }
}

function addToCart() {
    let productId = window.location.href.split('/').pop().split('.')[0];
    productId = productId.charAt(productId.length - 1);
    let noi = document.getElementById('noi').value;
    let cart = window.localStorage.getItem('cart');
    if(cart == null) {
        cart = {};
    } else {
        cart = JSON.parse(cart);
    }
    cart[productId] = noi;
    window.localStorage.setItem('cart', JSON.stringify(cart));
    alert('Product added to cart');
}

function removeFromCart(productId) {
    let cart = window.localStorage.getItem('cart');
    if(cart == null) {
        cart = {};
    } else {
        cart = JSON.parse(cart);
    }
    delete cart[productId];
    window.localStorage.setItem('cart', JSON.stringify(cart));
    window.location.reload();
}

function login() {
    event.preventDefault();
    let email = document.getElementById('email').value;

    alert('Logged in successfully as ' + email);

    window.location.href = '/index.html';
}

function contactUs() {
    event.preventDefault();
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    alert('Thank you for contacting us. We will get back to you soon.');

    window.location.href = '/index.html';
}

function signUp(){
    event.preventDefault();
    let email = document.getElementById('email').value;
    alert('Signed up successfully as ' + email);
    window.location.href = '/Login.html';
}