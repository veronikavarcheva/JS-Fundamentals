function solve(input) {
    let map = new Map();
    let neighborhoods = input.shift().split(', ');

    for (let neighborhood of neighborhoods) {
        map.set(neighborhood, []);
    }

    for (let i = 0; i < input.length; i++) {
        let line = input[i].split(' - ');
        let neighborhood = line[0];
        let name = line[1];

        if (neighborhoods.includes(neighborhood)) {
            map.get(neighborhood).push(name);
        }
    }

    let entries = Array.from(map);
    let sortedEntries = entries.sort((a, b) => {
        let arrLengthA = a[1].length;
        let arrLengthB = b[1].length;
        return arrLengthB - arrLengthA;
    });

    for (let kvp of sortedEntries) {
        console.log(`${kvp[0]}: ${kvp[1].length}`);

        for (let element of kvp[1]) {
            console.log(`--${element}`);
        }
    }
}

solve(['Abbey Street, Herald Street, Bright Mews',
    'Bright Mews - Garry',
    'Bright Mews - Andrea',
    'Invalid Street - Tommy',
    'Abbey Street - Billy']
);