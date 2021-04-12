function binary(binaryNum) {
    let decimalNum = 0;
    let j = 0;

    for (let i = binaryNum.length-1; i>= 0; i--){
        if( i === 0 && Number(binaryNum[j]) === 0) {
            decimalNum += 0;
            console.log(decimalNum);
            return;
        } 
            decimalNum += (Number(binaryNum[j])**i)*(2**i);
            j++;
        
        
    }

    console.log(decimalNum);
}

binary('00001001');
binary('11110000');