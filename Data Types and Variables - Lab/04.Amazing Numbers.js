function solve(number) {
    number = number.toString();
    let length = number.length;
    let sum = 0;
    let isAmazing;
    // console.log(length);
    
    for (let i=0; i<length; i++) {
        
        sum += Number(number[i]);
    }
    let sumText = sum.toString();
    let sumTextLength = sumText.length;
    for ( let j =0; j <sumText[j]; j++) {
        if( Number(sumText[j]) == 9) {
            isAmazing = true;
                    
        } else {
            isAmazing = false;
                        
        }
    }
    if (isAmazing) {
        console.log(`${number} Amazing? True`);
    } else {
        console.log(`${number} Amazing? False`);
    }
       
}

solve(1233);
solve(999);