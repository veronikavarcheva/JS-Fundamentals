function solve(word, text) {
    let wordToLowerCase = word.toLowerCase();
    text = text.toLowerCase();
    let index = text.indexOf(word);
    while (index >= 0 && index <= text.length - 1) {
        if (text.split(' ').includes(wordToLowerCase)) {
            console.log(word);
            break;
        }
        index = text.indexOf(word, index + 1);
    }
    
    if (index === -1) {
        console.log(`${word} not found!`);
    }
}

solve('javascript',
    'JavaScript is the best programming language'
);
solve('python',
    'JavaScript is the best programming language'
);