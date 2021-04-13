function solve(firstArray, secondArray) {
    let firstArrayLength = firstArray.length;
    let secondArrayLength = secondArray.length;
   
    let sumFirstArrayElements = 0;
   
    let areEquel = true;

        for( let i = 0; i < firstArrayLength; i++){
            firstArray[i] = Number(firstArray[i]);
            secondArray[i] = Number(secondArray[i]);
            sumFirstArrayElements += firstArray[i];
            if (firstArray[i] != secondArray[i]) {
                console.log(`Arrays are not identical. Found difference at ${i} index`);
                areEquel = false;
                break;  
            }
            
        }
        
       if (areEquel) {
        console.log(`Arrays are identical. Sum: ${sumFirstArrayElements}`);
       }
      
}

solve (['10','20','30'], ['10','20','30']);
solve (['1','2','3','4','5'], ['1','2','4','4','5']);
solve (['1'], ['10']);
