function solve(input) {
    let pattern = /\b(?<day>\d{2})([\.\-\/])(?<month>[A-Z][a-z]{2})\2(?<year>\d{4})\b/g;
    let text = input.shift();
    let matches = text.matchAll(pattern);

    for (let match of matches) {
        console.log(`Day: ${match[1]}, Month: ${match[3]}, Year: ${match[4]}`);
    }
}

solve([
    '13/Jul/1928, 10-Nov-1934, 01/Jan-1951, 25.Dec.1937, 23/09/1973, 1/Feb/2016'
]);