function solve(word) {
    let text = word.toString();
    let length = text.length;
    let index = text[(length -1)];
    let output = '';
    
    

    for (let i= (length-1); i >= 0; i--) {
        output += `${text[i]}`;
    }
    console.log(output);
    
}

solve('Hello');
solve('SoftUni');
solve(1234);