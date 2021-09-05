function solve(input) {
    let words = {};
    let wordsToFind = input.shift().split(' ');
    for (let word of wordsToFind) {
        let counter = 0;

        for (let i = 0; i <= input.length - 1; i++) {
            if (input[i] === word) {
                counter++;
            }
        }
        words[word] = counter;
    }

    let entries = Object.entries(words);

    entries.sort((a, b) => {
        return b[1] - a[1];
    });

    for (let kvp of entries) {
        console.log(`${kvp[0]} - ${kvp[1]}`);
    }

}

solve([
    'this sentence', 'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurances', 'of', 'the'
    , 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
]
);