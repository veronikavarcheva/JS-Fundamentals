function solve(input) {
    let partyIndex = input.indexOf('PARTY');
    let listGuests = input.slice(0, partyIndex);
    let commingGuests = input.splice(partyIndex + 1);


    for (let guest of commingGuests) {
        if (listGuests.includes(guest)) {
            let index = listGuests.indexOf(guest);
            listGuests.splice(index, 1);
        }
    }

    let guestsCount = listGuests.length;
    console.log(guestsCount);
    let guestsNotComming = {};
    let vipGuests = [];
    let regularGuests = [];
    guestsNotComming.vip = vipGuests;
    guestsNotComming.regular = regularGuests;
    for (let guest of listGuests) {
        if (guest.charCodeAt(0) >= 48 && guest.charCodeAt(0) <= 57) {
            vipGuests.push(guest);
        } else {
            regularGuests.push(guest);
        }
    }
    vipGuests.concat(regularGuests).forEach((guest) => console.log(guest));

}

solve([
    '7IK9Yo0h', '9NoBUajQ',
    'Ce8vwPmE', 'SVQXQCbc',
    'tSzE5t0p', 'PARTY',
    '9NoBUajQ', 'Ce8vwPmE',
    'SVQXQCbc']);
solve(['m8rfQBvl',
    'fc1oZCE0',
    'UgffRkOn',
    '7ugX7bm0',
    '9CQBGUeJ',
    '2FQZT3uC',
    'dziNz78I',
    'mdSGyQCJ',
    'LjcVpmDL',
    'fPXNHpm1',
    'HTTbwRmM',
    'B5yTkMQi',
    '8N0FThqG',
    'xys2FYzn',
    'MDzcM9ZK',
    'PARTY',
    '2FQZT3uC',
    'dziNz78I',
    'mdSGyQCJ',
    'LjcVpmDL',
    'fPXNHpm1',
    'HTTbwRmM',
    'B5yTkMQi',
    '8N0FThqG',
    'm8rfQBvl',
    'fc1oZCE0',
    'UgffRkOn',
    '7ugX7bm0',
    '9CQBGUeJ'
]);