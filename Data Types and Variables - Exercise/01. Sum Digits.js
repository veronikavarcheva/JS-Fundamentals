function solve(number) {
    let text = number.toString();
    let length = text.length;
    let sum = 0;
    
    for( let i = 0; i < length; i++) {
        sum += (Number(text[i]))
    }
    
    console.log(sum);   

}

solve(245678);
solve(97561);
solve(543);
