function solve(input) {
    let obj = {};
    input.forEach((line) => {

        let [countryName, townName, travelCost] = line.split(' > ');
        if (!obj.hasOwnProperty(countryName)) {
            obj[countryName] = new Map();
            obj[countryName].set(townName, Number(travelCost));
        } else if (obj.hasOwnProperty(countryName) && !obj[countryName].has(townName)) {

            obj[countryName].set(townName, Number(travelCost));
        } else if (obj.hasOwnProperty(countryName) && obj[countryName].has(townName)) {
            for (let value of obj[countryName].values()) {
                if (value > Number(travelCost)) {
                    obj[countryName].set(townName, Number(travelCost));
                }
            }
        }
    });

    let keys = Object.keys(obj);
    let sortedKeys = keys.sort((a, b) => a.localeCompare(b));

    for (let sortKey of sortedKeys) {
        let entries = Array.from(obj[sortKey].entries());
        let sortedEntries = entries.sort((a, b) => a[1] - b[1]);
        let output = '';
        for (let kvp of sortedEntries) {
            output += `${kvp[0]} -> ${kvp[1]} `;
        }
        console.log(`${sortKey} -> ${output}`);
    }

}

solve([
    'Bulgaria > Sofia > 500',
    'Bulgaria > Sopot > 800',
    'France > Paris > 2000',
    'Albania > Tirana > 1000',
    'Bulgaria > Sofia > 200'
]);
