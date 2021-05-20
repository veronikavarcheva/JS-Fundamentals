function solve(sequence, bombArray) {
    let specialBombNumber = bombArray.shift();
    let bombNumberPower = bombArray.shift();

    let indexBombNumberInSequence = sequence.indexOf(specialBombNumber);
    
    for ( let i = 0; i <= sequence.length-1; i++) {
        if ( sequence[i] === specialBombNumber) {
            sequence.splice((Math.max((indexBombNumberInSequence-bombNumberPower),0)),Math.min(indexBombNumberInSequence,bombNumberPower));
            indexBombNumberInSequence = sequence.indexOf(specialBombNumber);
            sequence.splice(indexBombNumberInSequence,bombNumberPower+1);
            indexBombNumberInSequence = sequence.indexOf(specialBombNumber);
            i=0;
        }        
   }   
    // console.log(sequence);
    
    let outputSumOfLeftElements = 0;
    for ( let elements of sequence) {
        outputSumOfLeftElements +=elements;
    }
    console.log(outputSumOfLeftElements);
    

}

solve([1, 2, 2, 4, 2, 2, 2, 9],[4, 2]);
solve([1, 4, 4, 2, 8, 9, 1],[9, 3]);
solve([1, 7, 7, 1, 2, 3],[7, 1]);
solve([1, 1, 2, 1, 1, 1, 2, 1, 1, 1],[2, 1]);