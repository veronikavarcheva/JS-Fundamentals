function solve (counter) {
    counter = Number (counter);
    let sumOddNumbers = 0;

    for ( let i = 1; i <= 100; i++) {
        
        if ( i % 2 === 1) {
            
            if ( counter > 0) {
                console.log(i);
                sumOddNumbers += i;                
            } 
            counter--;
        }
        
    }
   
    console.log(`Sum: ${sumOddNumbers}`);   

}

solve(5);
solve(3);
