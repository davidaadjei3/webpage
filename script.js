// Subscribe
function subscribe() {
    const email = document.getElementById("subscribeEmail").value;
    if(email.includes("@")) {
        alert("Thank you for subscribing!");
        document.getElementById("subscribeEmail").value = "";
    } else {
        alert("Please enter a valid email.");
    }
}

// Shopping Cart
let cart = JSON.parse(sessionStorage.getItem("cart")) || [];

function addToCart(name) {
    cart.push(name);
    sessionStorage.setItem("cart", JSON.stringify(cart));
    alert(name + " added to cart!");
}

function viewCart() {
    const modal = document.getElementById("cartModal");
    const content = document.getElementById("cartItems");
    content.innerHTML = "";
    if(cart.length === 0) content.innerHTML = "<p>Cart is empty</p>";
    else cart.forEach(item => {
        const p = document.createElement("p");
        p.textContent = item;
        content.appendChild(p);
    });
    modal.style.display = "flex";
}

function clearCart() {
    cart = [];
    sessionStorage.removeItem("cart");
    alert("Cart is cleared!");
    viewCart();
}

function processOrder() {
    if(cart.length === 0) alert("Cart is empty!");
    else {
        alert("Thank you for your order!");
        cart = [];
        sessionStorage.removeItem("cart");
        viewCart();
    }
}

// Close modal
function closeCart() {
    document.getElementById("cartModal").style.display = "none";
}

// Contact Form
function submitContact() {
    const name = document.getElementById("contactName").value;
    const email = document.getElementById("contactEmail").value;
    const phone = document.getElementById("contactPhone").value;
    const message = document.getElementById("contactMessage").value;

    if(!name || !email || !message) {
        alert("Please fill in required fields.");
        return;
    }

    const contactObj = {name, email, phone, message};
    localStorage.setItem("contact_" + Date.now(), JSON.stringify(contactObj));
    alert("Thank you for your message, " + name + "!");
    document.getElementById("contactForm").reset();
}

