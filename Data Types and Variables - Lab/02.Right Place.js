function solve(firstString, char, secondString) {

    let result = firstString.replace('_',char);
    let output = result === secondString;
    let finalResult = (output) ? 'Matched': 'Not Matched';
    console.log(finalResult);        

}

solve('Str_ng', 'I', 'Strong');
solve('Str_ng', 'i', 'String');