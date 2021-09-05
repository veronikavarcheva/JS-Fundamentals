function solve(input) {
    let contacts = {};
    for (let line of input) {
        let [name, number] = line.split(' ');
        contacts[name] = number;
    }

    let entries = Object.entries(contacts);

    for (let line of entries) {
        console.log(line.join(' -> '));
    }

}

solve([
    'Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344'
]);