function solve(array) {
    let number;
    let sumEvenNumbers = 0;
    for( let element of array){
        number = Number(element);
        if ( number % 2 === 0){
            sumEvenNumbers += number;
        }
    }    
    console.log(sumEvenNumbers);
}

solve(['1','2','3','4','5','6']);
solve(['3','5','7','9']);
solve(['2','4','6','8','10']);