function solve(x1, y1, x2, y2) {
    x1 = Number(x1);
    y1 = Number(y1);
    x2 = Number(x2);
    y2 = Number(y2);

    let a = Math.abs(x1-x2);
    let b = Math.abs(y1-y2);
    let d = Math.sqrt((a*a) + (b*b));
    console.log(d);
    

}

solve(2, 4, 5, 0);
solve(2.34, 15.66, -13.55, -2.9985);