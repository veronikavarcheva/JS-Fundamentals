function solve(array) {

    let newArray = [];
    let swapOperations = Math.ceil(array.length/2);
    let output = '';

    for(let i=0; i < swapOperations; i++){
        newArray[i]=array[array.length-1-i];
        newArray[array.length-1-i]=array[i];
    }
    // console.log(newArray);
    
    for(let element of newArray){
        output += element + ' ';
    }
    console.log(output);
    
}

solve(['a', 'b', 'c', 'd', 'e']);
solve(['abc', 'def', 'hig', 'klm', 'nop']);
solve(['33', '123', '0', 'dd']);