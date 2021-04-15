function solve(array, rotations) {
    let rot = 0;
    let resultArray = [];
    let output = '';

    if (rotations > array.length){
        rot = rotations % array.length;
    } else {
        rot = rotations;
    }
   for ( let i= rot; i <=array.length-1; i++){      
           resultArray.push(array[i]);
   } 
   for( let i= 0; i < rot; i++) {
        resultArray.push(array[i])
   }  
    
    for(let element of resultArray){
        output += element + ' ';
    }
    console.log(output);
    
}

solve([51, 47, 32, 61, 21], 2);
solve([32, 21, 61, 1], 4);
solve([2, 4, 15, 31], 5);