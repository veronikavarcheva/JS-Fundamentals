function solve(array) {
    let bestSequence = [];;
    for(let i = 0; i < array.length; i++){
        let element =array[i];
        let currentSequence = [element];
        for(let j = i + 1;j < array.length; j++){
            let nextElement = array[j];
            if(element === nextElement){
                currentSequence.push(nextElement);
            } else{
                break;
            }
        }
        if(currentSequence.length > bestSequence.length){
            bestSequence = currentSequence;
        }
    }
    console.log(bestSequence.join(' '));
    
}

solve([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
solve([1, 1, 1, 2, 3, 1, 3, 3]);
solve([4, 4, 4, 4]);
solve([0, 1, 1, 5, 2, 2, 6, 3, 3]);    