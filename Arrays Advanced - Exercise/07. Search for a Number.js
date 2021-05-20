function solve(firstArr, secondArr) {

    let numberOfElementsTaken = secondArr.shift();
    let numberOfElementsToDelete = secondArr.shift();
    let numberToSearch = secondArr.shift();

    let elementsTaken = firstArr.slice(0,numberOfElementsTaken);
    let elementsToDelete = elementsTaken.splice(0, numberOfElementsToDelete);

    let count = 0;
   
    for( let i = 0; i <= elementsTaken.length-1; i++) {
        if (elementsTaken[i] === numberToSearch) {
            count++;
           
        }
    }
    console.log(`Number ${numberToSearch} occurs ${count} times.`);
    


}

solve([5, 2, 3, 4, 1, 6],[5, 2, 3]);