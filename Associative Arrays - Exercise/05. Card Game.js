function solve(input) {
    let obj = {};
    input.forEach((line) => {
        let [name, elements] = line.split(': ');

        if (!obj.hasOwnProperty(name)) {
            let cards = [];
            obj[name] = cards;
            elements.split(', ').forEach((el) => {
                if (!cards.includes(el)) {
                    cards.push(el);
                }
            });
        } else {
            elements.split(', ').forEach((el) => {
                if (!obj[name].includes(el)) {
                    obj[name].push(el);
                }
            });
        }
    });

    let entries = Object.entries(obj);

    for (let kvp of entries) {
        let sum = 0;
        for (let el of kvp[1]) {
            let valueMultiplNumbers = 1;
            for (let i = 0; i <= el.length - 1; i++) {
                let number = el[i];
                if (el[i] === '2') {
                    number = 2;
                } else if (el[i] === '3') {
                    number = 3;
                } else if (el[i] === '4') {
                    number = 4;
                } else if (el[i] === '5') {
                    number = 5;
                } else if (el[i] === '6') {
                    number = 6;
                } else if (el[i] === '7') {
                    number = 7;
                } else if (el[i] === '8') {
                    number = 8;
                } else if (el[i] === '9') {
                    number = 9;
                } else if (el[i] === '10') {
                    number = 10;
                } else if (el[i] === 'J') {
                    number = 11;
                } else if (el[i] === 'Q') {
                    number = 12;
                } else if (el[i] === 'K') {
                    number = 13;
                } else if (el[i] === 'A') {
                    number = 14;
                } else if (el[i] === 'S') {
                    number = 4;
                } else if (el[i] === 'H') {
                    number = 3;
                } else if (el[i] === 'D') {
                    number = 2;
                } else if (el[i] === 'C') {
                    number = 1;
                }
                
                if (i === 1 && el[i] === '0' && el[i] !== 'A' && el[i] !== 'S' && el[i] !== 'H' && el[i] !== 'D') {
                    number = 10;
                }
                valueMultiplNumbers *= number;
            }
            sum += valueMultiplNumbers;
        }
        console.log(`${kvp[0]}: ${sum}`);
    }
}

solve([
    'Pesho: 2C, 4H, 9H, AS, QS',
    'Slav: 3H, 10S, JC, KD, 5S, 10S',
    'Peshoslav: QH, QC, QS, QD',
    'Slav: 6H, 7S, KC, KD, 5S, 10C',
    'Peshoslav: QH, QC, JS, JD, JC',
    'Pesho: JD, JD, JD, JD, JD, JD'
]);