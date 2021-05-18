function solve(array) {
    let newArray = [];
    let currentElement='';
    for ( let i = 0; i <= array.length-1; i++) {
        if ( array[i]>= 0) {
            currentElement = newArray.push(array[i]);
        } else if ( array[i]<0) {
            currentElement = newArray.unshift(array[i]);
        }
    }

    for ( let elements of newArray) {
        console.log(elements);
        
    }

}

solve([7, -2, 8, 9]);
solve([3, -2, 0, -1]);