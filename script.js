let quoteCart = [];

function addToQuote(productName) {
    quoteCart.push(productName);

    updateCartCount();

    alert(productName + " added to quote");
}

function updateCartCount() {
    const counter = document.getElementById("cart-count");

    if(counter){
        counter.textContent = quoteCart.length;
    }
}

function requestQuote() {

    if(quoteCart.length === 0){
        alert("Your quote cart is empty.");
        return;
    }

    let message = "Hi 3D Magic,%0A%0A";
    message += "I'd like a quote for:%0A%0A";

    quoteCart.forEach(item => {
        message += "• " + item + "%0A";
    });

    message += "%0AThank you.";

    const whatsappNumber = "2762XXXXXX06";

    window.open(
        `https://wa.me/${whatsappNumber}?text=${message}`,
        "_blank"
    );
}
