function simpleCalculator (numOne, numTwo, operator) {
     
   let result=null;
    switch (operator) {
        case 'multiply':
            result = (x, y) => x * y;
            break;
        case 'divide':
            result = (x, y) => x / y;        
            break;
        case 'add':
            result = (x, y) => x + y;             
            break;
        case 'subtract':
            result =(x, y) => x - y;     
            break;
    }

    let finalResult = result(numOne, numTwo);
    console.log(finalResult);
    
}

simpleCalculator(5, 5, 'multiply');
simpleCalculator(40, 8, 'divide');
simpleCalculator(12, 19, 'add');
simpleCalculator(50, 13, 'subtract');