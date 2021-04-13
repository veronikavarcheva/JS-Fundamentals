function solve(numbers) {
    let condensed = [];
    
    if (numbers.length == 1) {
        condensed = numbers;              
    }   
    
    while( numbers.length>1){
        condensed = [];
        for(let i = 0; i < numbers.length - 1; i++){          
            condensed[i] = numbers[i]+numbers[i+1];
        }            
        numbers=condensed;       
    }
    console.log (condensed[0]);    
}


solve ([2,10,3]);
solve ([5,0,4,1,2]);
solve ([1]);
