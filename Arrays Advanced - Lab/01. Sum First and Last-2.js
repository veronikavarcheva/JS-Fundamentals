function solve(array) {

    let firstElement = array.shift();
    let lastElement = array.pop();
    // console.log(firstElement);
    // console.log(lastElement);

    let firstNumber = Number(firstElement);
    let lastNumber = Number(lastElement);
    let result = firstNumber + lastNumber;
    console.log(result);
    
    
    

}

solve(['20', '30', '40']);
solve(['5', '10']);