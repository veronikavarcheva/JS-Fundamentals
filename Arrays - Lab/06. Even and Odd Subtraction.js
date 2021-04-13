function solve(array) {
   
    let sumEvenNumbers = 0;
    let sumOddNumbers = 0;
    for(let element of array){
        if(element % 2 === 0){
            sumEvenNumbers += element;
        } else {
            sumOddNumbers += element;
        }
    }
    let subtraction = sumEvenNumbers - sumOddNumbers;
    console.log(subtraction);
}

solve([1,2,3,4,5,6]);
solve([3,5,7,9]);
solve([2,4,6,8,10]);