function simpleCalculator (numOne, numTwo, operator) {
    let operation = null;
    let result = 0;
    switch(operator) {
        case 'multiply':
           operation = function(numOne, numTwo) { // с function expression
                result = numOne * numTwo;
                return result;
            }
            console.log(operation(numOne, numTwo));
            
            break;
        case 'divide':
            operation = function(numOne, numTwo) {
                result = numOne / numTwo;
                return result;
            }
            console.log(operation(numOne, numTwo));
            break;
        case 'add':
            operation = function(numOne, numTwo) {
                result = numOne + numTwo;
                return result;
            }
            console.log(operation(numOne, numTwo));
            break;
        case 'subtract':
            operation = function(numOne, numTwo) {
                result = numOne - numTwo;
                return result;
            }
            console.log(operation(numOne, numTwo));
            break;
    }
    
    
}

simpleCalculator(5, 5, 'multiply');
simpleCalculator(40, 8, 'divide');
simpleCalculator(12, 19, 'add');
simpleCalculator(50, 13, 'subtract');