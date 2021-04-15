function solve(firstArray, secondArray) {
    let output;
    for (let i = 0; i <= firstArray.length-1; i++){
        for(let j = 0; j <= secondArray.length-1; j++){
            if(firstArray[i]===secondArray[j]){
                output = firstArray[i];
                console.log(output);
            }
        }
    }
}

solve(['Hey', 'hello', 2, 4, 'Peter', 'e'],
['Petar', 10, 'hey', 4, 'hello', '2']);
solve(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '],
['s', 'o', 'c', 'i', 'a', 'l']);