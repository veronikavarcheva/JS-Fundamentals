function solve(text) {
    let indexes = text.split('');
    let upperIndexes = [];

    for (let index in indexes) {
        let char = indexes[index];
        let asciiValue = char.charCodeAt(0);

        if (asciiValue >= 65 && asciiValue <= 90) {
            upperIndexes.push(index);
        }
    }

    let words = [];

    for (let i = 0; i <= upperIndexes.length - 1; i++) {
        let word = text.substring(upperIndexes[i], upperIndexes[i + 1]);
        words.push(word);
    }
    console.log(words.join(', '));
}

solve('SplitMeIfYouCanHaHaYouCantOrYouCan');
solve('HoldTheDoor');
solve('ThisIsSoAnnoyingToDo');