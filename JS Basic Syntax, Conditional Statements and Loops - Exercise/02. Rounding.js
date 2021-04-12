function solve (firstNum, secondNum) {
   

    if ( secondNum > 15) {
        firstNum = firstNum.toFixed(15);
    } else {
        firstNum = firstNum.toFixed(secondNum);

    }
  
    console.log(parseFloat(firstNum));  
    
        
}

solve(3.1415926535897932384626433832795,2);
solve(10.5,3);
