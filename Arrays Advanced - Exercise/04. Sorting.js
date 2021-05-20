function solve(array) {
    let numbers = array.slice();
    let sortedNumbers =numbers.sort((a,b)=> a-b);
    // console.log(sortedNumbers);
    
    let outputArray = [];
    let length = sortedNumbers.length;
    
    for( let i = 0; i < length; i ++) {
        let bigElement = sortedNumbers.pop();
        // outputArray.push(bigElement);
        let smallElement = sortedNumbers.shift();
        // outputArray.push(smallElement);
        outputArray.push(bigElement, smallElement);
    }  

    console.log(outputArray.join(' '));
    
}    
solve([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);