function solve(input) {

    let pattern = />>(?<name>[A-Za-z]+)<<(?<price>\d+\.?\d+)!(?<quantity>\d+)/g;
    let text = input.slice(0, input.indexOf('Purchase')).join(', ');
    let matches = text.matchAll(pattern);
    let names = [];
    let totalMoneySpend = 0;

    for (let match of matches) {
        names.push(match.groups.name);
        totalMoneySpend += Number(match.groups.price) * Number(match.groups.quantity);
    }

    console.log(`Bought furniture:`);

    for (let name of names) {
        console.log(name);
    }

    console.log(`Total money spend: ${totalMoneySpend.toFixed(2)}`);
}

solve(['>>Sofa<<312.23!3', '>>TV<<300!5', '>Invalid<<!5', 'Purchase']);