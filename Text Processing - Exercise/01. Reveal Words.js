function solve(textOne, textTwo) {
    let wordsToAdd = textOne.split(', ');

    for (let word of wordsToAdd) {
        wordToAddLength = word.length;
        let templete = '*'.repeat(wordToAddLength);
        textTwo = textTwo.replace(templete, word);
    }
    console.log(textTwo);
}

solve('great',
    'softuni is ***** place for learning new programming languages'
);
solve('great, learning',
    'softuni is ***** place for ******** new programming languages'
);