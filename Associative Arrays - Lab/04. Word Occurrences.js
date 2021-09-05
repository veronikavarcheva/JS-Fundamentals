function solve(input) {
    let map = new Map();
    let counter = 1;

    for (let element of input) {

        if (map.has(element)) {
            let newCounter = map.get(element);
            newCounter++;
            map.set(element, newCounter);

        } else {
            map.set(element, counter);
        }
    }

    let entries = Array.from(map.entries());
    let sortedEntries = entries.sort((a, b) => {
        return b[1] - a[1];
    });

    for (let kvp of sortedEntries) {
        console.log(`${kvp[0]} -> ${kvp[1]} times`);
    }

}

solve(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"]);