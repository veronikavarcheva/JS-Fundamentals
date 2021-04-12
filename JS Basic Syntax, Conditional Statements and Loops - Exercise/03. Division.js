function solve(number) {
    let firstNum = 2;
    let secondNum = 3;
    let thirdNum = 6;
    let fourthNum = 7;
    let fifthNum = 10;

    if (number % fifthNum == 0) {
        console.log(`The number is divisible by ${fifthNum}`);        
    } else if ( number % fourthNum == 0) {
        console.log(`The number is divisible by ${fourthNum}`);        
    } else if ( number % thirdNum == 0) {
        console.log(`The number is divisible by ${thirdNum}`);        
    } else if ( number % secondNum == 0) {
        console.log(`The number is divisible by ${secondNum}`);        
    } else if (number % firstNum == 0) {
        console.log(`The number is divisible by ${firstNum}`);        
    } else {
        console.log('Not divisible');        
    }

}

solve(30);
solve(15);
solve(12);
solve(1643);