function solve(input) {
    let messagesCount = Number(input.shift());
    let counter = 0;
    let attackedPlanetsCount = 0;
    let destroyedPlanetsCount = 0;
    let attackedPlanets = [];
    let destroyedPlanets = [];

    for (let i = 0; i < messagesCount; i++) {
        let message = input[i];

        for (let j = 0; j < message.length; j++) {
            if (message[j].includes('s') || message[j].includes('t') || message[j].includes('a') || message[j].includes('r') ||
                message[j].includes('S') || message[j].includes('T') || message[j].includes('A') || message[j].includes('R')) {
                counter++;
            }
        }

        let enigma = '';

        for (let j = 0; j < message.length; j++) {
            let asciiValue = message.charCodeAt(j);
            let newAsciiValue = asciiValue - counter;
            enigma += String.fromCharCode(newAsciiValue);

        }

        counter = 0;
        let pattern = /\@(?<planetName>[A-Z][a-z]+)[^@\-!:>]*\:(?<population>\d+)[^@\-!:>]*\!(?<attackType>A|D)\![^@\-!:>]*\-\>(?<soldierCount>\d+)/g;
        let match = pattern.exec(enigma);

        if (match !== null) {
            let entries = Object.entries(match.groups);

            if (match.groups.attackType === 'A') {
                attackedPlanetsCount++;
                attackedPlanets.push(match.groups.planetName);
                attackedPlanets.sort((a, b) => { return a - b });
            }

            if (match.groups.attackType === 'D') {
                destroyedPlanetsCount++;
                destroyedPlanets.push(match.groups.planetName);
            }

        }
    }
    attackedPlanets.sort((a, b) => { return a.localeCompare(b) });
    destroyedPlanets.sort((a, b) => { return a.localeCompare(b) });

    if (attackedPlanetsCount > 0) {
        console.log(`Attacked planets: ${attackedPlanetsCount}`);
        for (let planet of attackedPlanets) {
            console.log(`-> ${planet}`);
        }
    } else {
        console.log(`Attacked planets: 0`);
    }

    if (destroyedPlanetsCount > 0) {
        console.log(`Destroyed planets: ${destroyedPlanetsCount}`);
        for (let planet of destroyedPlanets) {
            console.log(`-> ${planet}`);
        }
    } else {
        console.log(`Destroyed planets: 0`);
    }
}

solve(['2', 'STCDoghudd4=63333$D$0A53333', 'EHfsytsnhf?8555&I&2C9555SR']);
solve([
    '3',
    "tt(''DGsvywgerx>6444444444%H%1B9444",
    'GQhrr|A977777(H(TTTT',
    'EHfsytsnhf?8555&I&2C9555SR'
]);