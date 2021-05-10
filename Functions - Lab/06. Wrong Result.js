function wrongResult(numOne, numTwo, numThree) {
    let result = '';
    let product = function(a, b, c) {
        if( a== 0 || b == 0 || c == 0) {
            result = 'Positive';
            return result;
          
        } else if ( a<0 && b < 0 && c <0) {
            result = 'Negative';
            return result;
            
        } else if ((a<0 && b<0 && c>0) || (a<0 && c < 0 && b >0) || (b<0 && c < 0 && a> 0)) {
            result = 'Positive';
            return result;
            
        } else if (a>0 && b > 0 && c > 0) {
            result = 'Positive';
            return result;
          
        } else if(( a < 0 && b >0 && c >0) || (b<0 && c>0 && a >0) ||(c <0 && a>0 && b>0)){
            result = 'Negative';
            return result;
            
        }
        
        
    }
    
    console.log(product(numOne, numTwo, numThree));
}

wrongResult(5, 12, -15);
wrongResult(-6, -12, 14);
wrongResult(-1, -2, -3);
wrongResult(-1, 0, 1);
