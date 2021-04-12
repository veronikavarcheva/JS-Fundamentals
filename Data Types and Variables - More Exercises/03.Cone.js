function solve(r, h) {
    radius = Number(r);
    height = Number(h);

    let volume = 1/3 * Math.PI * radius * radius * height;
    let area = Math.PI * radius * (radius + Math.sqrt(r*r + h*h));

    console.log(`volume = ${volume.toFixed(4)}`);
    console.log(`area = ${area.toFixed(4)}`);
    
   
}

solve(3, 5);
solve(3.3, 7.8);