function solve(array) {

    let firstElement = array[0];
    let lastElement = array[array.length-1];
    let result = Number(firstElement)+ Number(lastElement);

    console.log(result);
    

}

solve(['20', '30', '40']);
solve(['5', '10']);