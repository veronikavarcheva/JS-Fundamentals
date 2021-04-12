function solve(firstNum, secondNum, thirdNum) {
    let maxNum = Number.MIN_SAFE_INTEGER;
    firstNum = Number(firstNum);
    secondNum = Number(secondNum);
    thirdNum = Number(thirdNum);
    
    if ( maxNum < firstNum) {
        maxNum = firstNum;
    }
    if ( maxNum < secondNum) {
        maxNum = secondNum;
    }
    if ( maxNum < thirdNum) {
        maxNum = thirdNum;
    }

    console.log(maxNum);
    
    


}

solve(-2, 7, 3);
solve(130, 5, 99);
solve(43, 43.2, 43.1);