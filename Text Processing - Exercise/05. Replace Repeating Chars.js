function solve(text) {
    let currentChar = text[0];
    let result = currentChar.slice();

    for (let i = 1; i <= text.length - 1; i++) {
        if (currentChar !== text[i]) {
            currentChar = text[i];
            result = result.concat(currentChar);
        } else {
            continue;
        }
    }
    console.log(result);
}

solve('aaaaabbbbbcdddeeeedssaa');
solve('qqqwerqwecccwd');