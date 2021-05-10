function solve(firstChar, secondChar) {

    function asciiFirstCodeFromString (a){
        let n = a.charCodeAt(0);
        return n;      
    }

    function asciiSecondCodeFromString (b) {
        let m = b.charCodeAt(0);
        return m;
    }

     n = asciiFirstCodeFromString(firstChar);
     m = asciiSecondCodeFromString(secondChar);
    // console.log(n);
    // console.log(m);

    let output = '';
    if (n<m){
        for ( let i = n+1; i < m; i++){
           output += `${String.fromCharCode(i) + ' '}`; 
        } 
    } else if ( n>m) {
        for (let j = m+1; j < n; j++){
            output += `${String.fromCharCode(j) + ' '}`; 
        }
    }
   
    
    
    console.log(output);
    
}

solve('a','d'); 
solve('#',':');
solve('C','#');