function solve(n) {

    

    for (let i = 1; i <= n; i++) {    
        let text = i.toString();
        let length = text.length;
        let sum = 0;
        for(let j = 0; j < length; j++) {
            sum += Number(text[j]);
           
        }      
        if ( sum === 5 || sum ===7 || sum === 11) {
            console.log(`${i} -> True`);                
        } else {
            console.log(`${i} -> False`);                
        }
    }

}

solve(15);