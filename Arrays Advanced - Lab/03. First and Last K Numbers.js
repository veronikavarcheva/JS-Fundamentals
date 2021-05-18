function solve(array) {
    let k = array.shift();
    let length = array.length;
    let firstNumbers = array.slice(0,k);
    let lastNumbers = array.slice(length-k);
    let resultFirstElements = firstNumbers.join(' ');
    console.log(resultFirstElements);
    let resultLastElements = lastNumbers.join(' ');
    console.log(resultLastElements);   

}

solve([2, 7, 8, 9]);
solve([3, 6, 7, 8, 9]);