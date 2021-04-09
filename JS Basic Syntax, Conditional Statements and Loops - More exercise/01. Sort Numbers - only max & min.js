function solve(firstNumber, secondNumber, thirdNumber) {
    firstNumber = Number(firstNumber);
    secondNumber = Number(secondNumber);
    thirdNumber = Number(thirdNumber);
    let minNumber = Number.MAX_SAFE_INTEGER;
    let maxNumber = Number.MIN_SAFE_INTEGER;
    let midNumber = 0;

    
        if (minNumber > firstNumber) {
            minNumber = firstNumber;
        } 
        if ( minNumber > secondNumber) {
            minNumber = secondNumber;
        } 
         if (minNumber > thirdNumber) {
            minNumber = thirdNumber;
        }

        if (maxNumber < firstNumber) {
            maxNumber = firstNumber;
        } 
         if ( maxNumber < secondNumber) {
            maxNumber = secondNumber;
        } 
         if ( maxNumber < thirdNumber) {
            maxNumber = thirdNumber;
        }

        if ( firstNumber >= minNumber) {
            midNumber = firstNumber;
        } else if ( secondNumber >= minNumber) {
            midNumber = secondNumber;
        } else if ( thirdNumber >= minNumber) {
            midNumber = thirdNumber;
        }       
    
            console.log(maxNumber);
            console.log(midNumber);
            console.log(minNumber);
            

}

// solve(2, 1, 3);
solve(-2, 1, 3);
// solve(0, 0, 2);