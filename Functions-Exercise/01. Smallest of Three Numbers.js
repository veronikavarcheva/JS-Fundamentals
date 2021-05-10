function solution (firstNum, secondNum, thirdNum) {
        if(firstNum < secondNum && firstNum < thirdNum) {
            console.log(firstNum);
        } else if ( secondNum< thirdNum && secondNum <firstNum) {
           console.log(secondNum);
        } else {
           console.log(thirdNum);
        }
    
}
solution(2, 5, 3);
solution(600, 342, 123);
solution (25, 21, 4);



