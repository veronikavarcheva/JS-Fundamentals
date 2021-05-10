function solve (firstNum, secondNum, thirdNum) {

    function sumOfFirstTwoNumbers(a,b) {
        let sum = a + b;
        return sum;
    }

    function subtract(sum, c) {
        let result = sum - c;
        return result;
    }

    sum = (sumOfFirstTwoNumbers(firstNum, secondNum));
    result = (subtract(sum,thirdNum));
    console.log(result);
}

solve(23, 6, 10);
solve(1, 17, 30);
solve(42, 58, 100);
