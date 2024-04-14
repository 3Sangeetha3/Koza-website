// TODO: Add all products to the productList object

const productList = {
    "1": {
        "name": "Yogi Leather Satchel",
        "price": "43990",
        "image": "/images/leather/products/58image.jpg"
    },
    "2": {
        "name": "Wellesley Women's Laptop Bag",
        "price": "3990",
        "image": "/images/leather/products/78image.jpg"
    },
    "3": {
        "name": "Tudor Leather Messenger Bag",
        "price": "5990",
        "image": "/images/leather/products/113image.jpg"
    },
    "4": {
        "name": "Classic Leather Flap",
        "price": "5990",
        "image": "/images/leather/products/111image.jpg"
    },
    "5": {
        "name": "Astor Leather Laptop Sleeve",
        "price": "5990",
        "image": "/images/leather/products/49image.jpg"
    },
    "6": {
        "name": "The Chronicle Leather Backpack Canvas",
        "price": "8990",
        "image": "/images/leather/products/39image.jpg"
    },
    "7": {
        "name": "Business Card Case",
        "price": "990",
        "image": "/images/leather/products/44image.jpg"
    },
    "8": {
        "name": "Hamlet Leather Satchel",
        "price": "6990",
        "image": "/images/leather/products/76image.jpg"
    },
    "9": {
        "name": "Wallstreeter Leather Laptop Sleeve",
        "price": "4990",
        "image": "/images/leather/products/41image.jpg"
    },
    "10": {
        "name": "Wallstreeter Leather Laptop Sleeve",
        "price": "4990",
        "image": "/images/leather/products/41image.jpg"
    },
    "11": {
        "name": "Wallstreeter Leather Laptop Sleeve",
        "price": "4990",
        "image": "/images/leather/products/41image.jpg"
    },
    "12": {
        "name": "Wallstreeter Leather Laptop Sleeve",
        "price": "4990",
        "image": "/images/leather/products/41image.jpg"
    },
    "13": {
        "name": "Wallstreeter Leather Laptop Sleeve",
        "price": "4990",
        "image": "/images/leather/products/41image.jpg"
    },
    "14": {
        "name": "Wallstreeter Leather Laptop Sleeve",
        "price": "4990",
        "image": "/images/leather/products/41image.jpg"
    },
    "15": {
        "name": "Wallstreeter Leather Laptop Sleeve",
        "price": "4990",
        "image": "/images/leather/products/41image.jpg"
    },
    "16": {
        "name": "Wallstreeter Leather Laptop Sleeve",
        "price": "4990",
        "image": "/images/leather/products/41image.jpg"
    },
    "17": {
        "name": "Wallstreeter Leather Laptop Sleeve",
        "price": "4990",
        "image": "/images/leather/products/41image.jpg"
    },
    "18": {
        "name": "Wallstreeter Leather Laptop Sleeve",
        "price": "4990",
        "image": "/images/leather/products/41image.jpg"
    },
    "19": {
        "name": "Wallstreeter Leather Laptop Sleeve",
        "price": "4990",
        "image": "/images/leather/products/41image.jpg"
    },
    "20": {
        "name": "Wallstreeter Leather Laptop Sleeve",
        "price": "4990",
        "image": "/images/leather/products/41image.jpg"
    },
    "21": {
        "name": "Wallstreeter Leather Laptop Sleeve",
        "price": "4990",
        "image": "/images/leather/products/41image.jpg"
    },
    "22": {
        "name": "Wallstreeter Leather Laptop Sleeve",
        "price": "4990",
        "image": "/images/leather/products/41image.jpg"
    },
    "23": {
        "name": "Wallstreeter Leather Laptop Sleeve",
        "price": "4990",
        "image": "/images/leather/products/41image.jpg"
    },
    "24": {
        "name": "Wallstreeter Leather Laptop Sleeve",
        "price": "4990",
        "image": "/images/leather/products/41image.jpg"
    },
    "25": {
        "name": "Wallstreeter Leather Laptop Sleeve",
        "price": "4990",
        "image": "/images/leather/products/41image.jpg"
    },
    "26": {
        "name": "Wallstreeter Leather Laptop Sleeve",
        "price": "4990",
        "image": "/images/leather/products/41image.jpg"
    },
    "27": {
        "name": "Wallstreeter Leather Laptop Sleeve",
        "price": "4990",
        "image": "/images/leather/products/41image.jpg"
    },
    "28": {
        "name": "Wallstreeter Leather Laptop Sleeve",
        "price": "4990",
        "image": "/images/leather/products/41image.jpg"
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