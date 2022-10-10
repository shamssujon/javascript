// Get value from input
const getInputValue = (inputId) => {
    const inputValue = document.getElementById(inputId).value;
    return inputValue;
};

document.getElementById("addBtn").addEventListener("click", () => {
    const product = getInputValue("input-product");
    const quantity = getInputValue("input-quantity");

    displayToUi(product, quantity);
    addToDb(product, quantity);
});

// Add to Local Storage
const addToDb = (product, quantity) => {
    const cart = getCartFromDB();
    cart[product] = quantity;
    localStorage.setItem("cart", JSON.stringify(cart));
};

// Get from Local Storage
const getCartFromDB = () => {
    const savedCart = localStorage.getItem("cart");
    let cart = {};
    if (savedCart) {
        cart = JSON.parse(savedCart);
    }
    return cart;
};

// Display to UI
const displayToUi = (product, quantity) => {
    const productContainer = document.getElementById("product-container");
    const li = document.createElement("li");
    li.innerText = `${product}: ${quantity}`;
    productContainer.appendChild(li);
};

const displayStoredCartToUi = () => {
    const cart = getCartFromDB();
    // console.log(cart);
    for(const product in cart) {
        const quantity = cart[product];
        displayToUi(product, quantity);
    }
}
displayStoredCartToUi()