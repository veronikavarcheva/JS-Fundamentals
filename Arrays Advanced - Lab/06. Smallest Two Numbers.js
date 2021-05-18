function solve(numbers) {
    numbers.sort((a,b)=> a-b);
    let firstNumber = numbers.shift();
    let secondNumber = numbers.shift();
    console.log(firstNumber, secondNumber); 
    // let result = numbers.slice(0,2);
    // console.log(result.join(' '));      

}

solve([30, 15, 50, 5]);
solve([3, 0, 10, 4, 7, 3]);