function solve(array) {

    let modifiedArray = [];
    let sumArray = 0;
    let sumModifiedArray = 0;

    for( let i =0; i <= array.length-1; i++) {
        if( array[i] % 2 === 0){
            modifiedArray[i] = array[i] + i;
        } else if (array[i] % 2 ===1 || array[i] % 2 === -1) {
            modifiedArray[i] = array[i] - i;
        }
        sumArray += array[i];
        sumModifiedArray +=modifiedArray[i];
    }
    console.log(modifiedArray);
    console.log(sumArray);
    console.log(sumModifiedArray);
   
}   

solve([5, 15, 23, 56, 35]);
solve([-5, 11, 3, 0, 2]);
