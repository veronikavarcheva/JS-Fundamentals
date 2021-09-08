function solve(input) {
    let pattern = /\+{1}3{1}5{1}9{1}([\-\s])2\1[0-9]{3}\1[0-9]{4}\b/g;
    let text = input.shift();
    let matches = text.matchAll(pattern);
    let output = [];

    for (let match of matches) {
        output.push(match[0]);
    }

    console.log(output.join(', '));
}

solve([
    '+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222'
]);