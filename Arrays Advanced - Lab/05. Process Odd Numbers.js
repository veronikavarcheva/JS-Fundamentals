function solve(array) {
    let isOddIndex = function(number,index) {         
            return index % 2 != 0;
        }              
    let oddIndexes = array.filter(isOddIndex);  
    // console.log(oddIndexes);
    
    let oddIndexesDoubled = [];
    let element= 0; 
    for ( let i = 0; i <= oddIndexes.length-1; i++){
        element = oddIndexes[i]*2;
        oddIndexesDoubled.push(element);
    }
    // ИЛИ oddIndexes.map((x)=> x * 2);
    // console.log(oddIndexesDoubled);
    
    let reversedOddIndexesDoubled = [];
    let output = '';
    for( let i = oddIndexesDoubled.length -1; i >= 0; i --){
        output += `${oddIndexesDoubled.pop()} `;
       
    }
    // или array.reverse();
        console.log(output);    
}

solve([10, 15, 20, 25]);
solve([3, 0, 10, 4, 7, 3]);