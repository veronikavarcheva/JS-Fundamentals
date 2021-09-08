function solve(input) {
    let wordsToCheck = input.split(' ');
   
    for (const word of wordsToCheck) {
        let isValid = true;
        if (word.startsWith('#') && word.length > 1) {
            for (let i = 1; i <= word.length - 1; i++) {
                if (!(word.charCodeAt(i) >= 97 && word.charCodeAt(i) <= 122) &&
                    !(word.charCodeAt(i) >= 65 && word.charCodeAt(i) <= 90)) {
                    isValid = false;
                }
            }

            if (isValid) {
                let wordFound = word.replace('#', '');
                console.log(wordFound);
            }
        }
    }
}

solve('Nowadays everyone uses # to tag a #special word in #socialMedia');