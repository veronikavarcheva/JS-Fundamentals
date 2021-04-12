function solve(firstNumber, secondNumber, thirdNumber) {
    firstNumber = Number(firstNumber);
    secondNumber = Number(secondNumber);
    thirdNumber = Number(thirdNumber);

    let sum = firstNumber + secondNumber + thirdNumber;
    if ( sum % 1 === 0) {
        console.log(`${sum} - Integer`);        
    } else {
        console.log(`${sum} - Float`);        
    }
}

solve(9, 100, 1.1);
solve(100, 200, 303);