function solve(input) {
    let obj = {};
    let resource;
    let quantity;
    for (let index in input) {
        index = Number(index);
        if (index % 2 === 0) {
            resource = input[index];
            if (!obj.hasOwnProperty(resource)) {
                obj[resource] = 0;
            }
        } else if (index % 2 === 1) {
            quantity = Number(input[index]);
            obj[resource] += quantity;
        }
    }

    let entries = Object.entries(obj);
    for (let kvp of entries) {
        console.log(`${kvp[0]} -> ${kvp[1]}`);
    }
}

solve(['gold', '155', 'silver', '10', 'copper', '17']);
solve([
    'gold', '155',
    'silver', '10',
    'copper', '17',
    'gold', '15'
]);