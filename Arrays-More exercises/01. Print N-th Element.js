function solve(input) {
    let step = Number(input.pop());
    let str = '';
    for(let i = 0; i <= input.length-1; i+= step) {
        str += input[i] + ' ';
    }
    console.log(str);
      
}

solve(['5', '20', '31', '4', '20', '2']);
solve(['dsa', 'asd', 'test', 'test', '2']);
solve(['1', '2', '3', '4', '5', '6']);