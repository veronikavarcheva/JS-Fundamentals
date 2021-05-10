function order(product, quantity) {
    let pricePerCoffee = 1.50;
    let pricePerWater = 1.00;
    let pricePerCoke = 1.40;
    let pricePerSnacks = 2.00;
    let pricePerProduct = 0;
    

    if( product === 'coffee') {
        pricePerProduct = pricePerCoffee;
    } else if (product === 'water') {
        pricePerProduct = pricePerWater;
    } else if (product === 'coke') {
        pricePerProduct = pricePerCoke;
    } else if (product === 'snacks') {
        pricePerProduct = pricePerSnacks;
    }
    let totalPrice = (pricePerProduct * quantity).toFixed(2);
    return totalPrice;
}

console.log(order('water', 5));
console.log(order('coffee', 2));


