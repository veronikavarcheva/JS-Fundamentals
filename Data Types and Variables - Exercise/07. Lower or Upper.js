function solve(char) {
    
    let lowerCase = char.toLowerCase();
    let upperCase = char.toUpperCase();
    
    if ( char === upperCase) {
        console.log('upper-case');        
    } else if (char === lowerCase){
        console.log('lower-case');        
    }
}

solve('L');
solve('f');