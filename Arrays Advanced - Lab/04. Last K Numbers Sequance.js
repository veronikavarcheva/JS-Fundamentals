function solve(n, k) {
    let array = [1];
    
    let nextNumber = 0;
    for( let i = 1; i <= n-1; i++) {
       
        let start = Math.max(0,(i-k));
        let last = i - 1;
        let sum = 0;
            for(let j = start; j <= last; j++){
                sum += array[j];
            }
               
    array[i] = sum;
               
    }
    console.log(array.join(' '));
}
   


solve(6, 3);
solve(8, 2);