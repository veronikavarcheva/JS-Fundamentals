function solve(stock, ordered) {
    const products = {};
    stock.forEach((element, i) => {
        if (i % 2 === 0) {
            const product = stock[i];
            const quantity = Number(stock[i + 1]);
            products[product] = quantity;
        }

    });

    for (let i = 0; i < ordered.length; i += 2) {
        const product = ordered[i];
        const quantity = Number(ordered[i + 1]);
        if (products[product] === undefined) {
            products[product] = 0;
        }
        products[product] += quantity;
    }
    // console.log(products);
    for (let product in products) {
        console.log(`${product} -> ${products[product]}`);

    }
}

solve([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
],
    [
        'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
);