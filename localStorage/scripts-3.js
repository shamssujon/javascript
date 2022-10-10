// Get Input value
const getInputValue = (inputId) => {
    const inputElement = document.getElementById(inputId);
    const inputValue = inputElement.value;
    inputElement.value = "";
    return inputValue;
};

document.getElementById("addBtn").addEventListener("click", () => {
    const product = getInputValue("input-product");
    const quantity = getInputValue("input-quantity");
    displaytoUi(product, quantity);
    addToDb(product, quantity);
});

const displaytoUi = (product, quantity) => {
    const producrContainer = document.getElementById("product-container");
    const li = document.createElement("li");
    li.innerHTML = `${product} ${quantity}`;
    producrContainer.appendChild(li);
};

const addToDb = (product, quantity) => {
    let cart = getFromDb();
    cart[product] = quantity;
    localStorage.setItem("cart", JSON.stringify(cart));
};

const getFromDb = () => {
    const savedCart = localStorage.getItem("cart");
    let cart = {};
    if (savedCart) {
        cart = JSON.parse(savedCart);
    }
    return cart;
};

const displaySavedCart = () => {
    const savedCart = getFromDb();
    for (product in savedCart) {
        const quantity = savedCart[product];
        displaytoUi(product, quantity);
    }
};
displaySavedCart();
