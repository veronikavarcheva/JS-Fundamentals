function matrix(n) {

    let outputFirstRow = '';
    let outputNextRow = '';
    let outputNextRowToPrint = '';
    for( let firstRow = 1; firstRow <= n; firstRow++) {
        outputFirstRow += `${n} `;
       
        for( let nextRow = 1; nextRow <= n; nextRow++){
            outputNextRow += `${n} `;
            if(nextRow===n) {
                outputNextRowToPrint = `${outputNextRow} \n`;
            }
        }
        outputNextRow = '';
        
    }
    console.log(outputFirstRow);        
    console.log(outputNextRowToPrint.repeat(n-1));
   
    
    
}

matrix(3);
matrix(7);
matrix(2);