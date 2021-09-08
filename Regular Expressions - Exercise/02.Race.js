function solve(input) {
    let racers = input[0].split(', ');
    let raceInfo = {};

    for (let data of input.slice(1)) {
        let nameMatch = data.match(/[A-Za-z]/g);
        let name = nameMatch.join('');
        let distance = 0;
        if (nameMatch && racers.includes(name)) {
            let distanceMatch = data.match(/[\d]/g);

            for (let element of distanceMatch) {
                distance += Number(element);
            }

            if (!raceInfo[name]) {
                raceInfo[name] = 0;
            }
            raceInfo[name] += distance;
        }
    }
    let entries = Object.entries(raceInfo);
    let sortedEntries = entries.sort((a, b) => b[1] - a[1])
    sortedEntries = sortedEntries.slice(0, 3);
    let finalists = [];

    for (let kvp of sortedEntries) {
        finalists.push(kvp[0]);
    }

    console.log(`1st place: ${finalists[0]}`);
    console.log(`2nd place: ${finalists[1]}`);
    console.log(`3rd place: ${finalists[2]}`);
}

solve([
    'George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race'
]);