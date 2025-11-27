//calculate the total price of items in a shopping cart

const cartItems = [
    { name: 'Laptop', price: 1200, quantity: 1 },
    { name: 'Mouse', price: 25, quantity: 2 },
    { name: 'Monitor', price: 300, quantity: 1 }
];

function calculateTotal(cart) {
    return cart.reduce((total, item) => {
        return total + (item.price * item.quantity);
    }, 0);
}

function calculateTotaleasier(cart) {
    let total = 0;
    for (const item of cart) {
        total += item.price * item.quantity;
    }
    return total;
}

const totalPrice = calculateTotal(cartItems);
const totalPriceEasier = calculateTotaleasier(cartItems);
console.log(`Total Price: $${totalPrice}`);
console.log(`Total Price (Easier Method): $${totalPriceEasier}`);

