function solve(input) {
    let map = new Map();
    for (let line of input) {
        let [key, value] = line.split(' ');
        if (!map.has(key)) {
            map.set(key, value);
        } else {
            map.set(key, (Number(map.get(key)) + Number(value)));
        }

    }

    for (const kvp of map.entries()) {
        console.log(kvp.join(' -> '));

    }

}

solve(['tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40']);