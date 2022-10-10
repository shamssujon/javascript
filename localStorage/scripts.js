const addProduct = () => {
    // Get product and quantity values from the input fields
    const product = document.getElementById("product-input").value;
    const quantity = document.getElementById("quantity-input").value;

    addToDb(product, quantity);
};

const addToDb = (product, quantity) => {
    let cart = getStoredCart();

    // Set a cart object property with value that we get from the input or from the storedCart
    cart[product] = quantity;

    // Set the cart to localStorage
    localStorage.setItem("cart", JSON.stringify(cart));

};

const getStoredCart = () => {
    let cart = {};

    // Check if already have a item named "cart" in the localStorage
    const storedCart = localStorage.getItem("cart");

    // If have ? parse it : if no, return default
    if (storedCart) {
        cart = JSON.parse(storedCart);
        console.log(cart);
    }
    return cart;
};
