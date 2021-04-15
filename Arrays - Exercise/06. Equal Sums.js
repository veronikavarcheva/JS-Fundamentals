function solve(array) {
    let leftSum=0;
    let rightSum=0; 
   
    for(let i = 0; i < array.length; i++){
        if ( i === 0){
            leftSum = 0;
        } else if ( i >0 &&  i< array.length) {
            leftSum += array[i-1];
        } else if (i === array.length - 1){
            leftSum += array[i-1];
        }
        rightSum = 0;
        for(let j = i+1; j < array.length;j++){
            
            if(i === 0) {
                rightSum += array[j];
            } else if (i > 0 && i < array.length){
                rightSum += array[j];
            } else if(i === array.length - 1) {
                rightSum = 0;
            }
            
        }
        if ( array.length === 1) {
            leftSum = 0;
            rightSum = 0;
        }
        if( leftSum === rightSum) {
            console.log(i);
            break;            
        } else if ( leftSum !== rightSum){
          
            
            continue;  
            
        }
    }
        
       
     if(leftSum !== rightSum){
         console.log('no');
         
     }      
   

}
solve([1, 2, 3, 3]);
// solve([1, 2]);
// solve([1]);
// solve([1, 2, 3]);
// solve([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);