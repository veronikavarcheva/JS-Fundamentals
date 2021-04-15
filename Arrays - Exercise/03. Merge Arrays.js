function solve(firstArray, secondArray) {

    let resultArray = [];
    let output = '';

    for(let i = 0; i <= firstArray.length-1; i++) {
        if ( i % 2 === 0) {
            resultArray[i] = Number(firstArray[i]) + Number(secondArray[i]);
            output += resultArray[i]; 
        } else if ( i % 2 === 1) {
            resultArray[i] = `${firstArray[i]}${secondArray[i]}`;
            output += ` - ${resultArray[i]} - `;
        }
    }
    console.log(output);
  
}

solve(['5', '15', '23', '56', '35'],
['17', '22', '87', '36', '11']);
solve(['13', '12312', '5', '77', '4'],
['22', '333', '5', '122', '44']);