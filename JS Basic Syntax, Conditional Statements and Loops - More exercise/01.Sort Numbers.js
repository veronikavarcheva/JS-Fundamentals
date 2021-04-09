function solve(a, b, c) {
    a = Number(a);
    b = Number(b);
    c = Number(c);

    if( a > b && a > c && b >= c) {
        console.log(a);
        console.log(c);
        console.log(b);          
    } else if (a > b && a > c && c >= b) {
        console.log(a);
        console.log(b);
        console.log(c);  
    } else if (b > a && b > c && a >= c) {
        console.log(b);
        console.log(a);
        console.log(c);
    } else if (b > a && b > c && c >= a) {
        console.log(b);
        console.log(c);
        console.log(a);
    } else if ( c > a && c > b && a >= b) {
        console.log(c); 
        console.log(a);
        console.log(b);
    } else if ( c > a && c > b && b >= a) {
        console.log(c); 
        console.log(b);
        console.log(a);
    }
}

solve(2, 1, 3);
solve(-2, 1, 3);
solve(0, 0, 2);