function solve(numbers) {
    let copyNumbers = numbers.slice();
    
    for (let i = 0; i < copyNumbers.length; i++) {
        for (let j = copyNumbers.length -1; j > i; j--) {
            // let repeatedNumber =copyNumbers[i]/copyNumbers[j]===1;
            if(copyNumbers[i]===copyNumbers[j]){
              copyNumbers.splice(j,1); 
            }               
        }                 
    }
    console.log(copyNumbers.join(' '));  
}

solve([1, 2, 3, 4]);
solve([7, 8, 9, 7, 2, 3, 4, 1, 2]);
solve([20, 8, 12, 13, 4, 4, 8, 5]);