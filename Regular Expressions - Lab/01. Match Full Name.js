function solve(input) {
    let pattern = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g;
    let text = input.shift();
    let matches = text.matchAll(pattern);
    let output = '';
    
    for (let match of matches) {
        output += `${match[0]} `;
    }
    console.log(output);
}

solve([
    'Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan\tIvanov'
]);