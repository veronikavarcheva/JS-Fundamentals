function solve(input) {
    let pattern = /\%(?<name>[A-Z][a-z]+)\%[^|$\%.]*<(?<product>\w+)>[^|$\%.]*\|(?<count>\d+)\|[^|$\%.]*?(?<price>\d+\.?\d+)\$/g;
    let totalPrice = 0;
    let totalIncome = 0;

    for (let element of input) {
        let matches = element.matchAll(pattern);

        for (let match of matches) {
            totalPrice = match.groups.count * match.groups.price;
            totalIncome += Number(totalPrice.toFixed(2));
            console.log(`${match.groups.name}: ${match.groups.product} - ${totalPrice.toFixed(2)}`);
        }
    }
    console.log(`Total income: ${totalIncome.toFixed(2)}`);
}

solve([
    '%George%<Croissant>|2|10.3$',
    '%Peter%<Gum>|1|1.3$',
    '%Maria%<Cola>|1|2.4$',
    'end of shift'
]);
solve(
    ['%InvalidName%<Croissant>|2|10.3$',
        '%Peter%<Gum>1.3$',
        '%Maria%<Cola>|1|2.4',
        '%Valid%<Valid>valid|10|valid20$',
        'end of shift'
    ]);
