function pyramid(n, increment) {
    let n = input.shift();
    let increment = input.shift();
    let stoneRequired = 0;
    let lapislazuliRequired = 0;
    let goldRequired = 0;
    let marbleRequired = 0;
    let area = 0;
    for ( let step = n; step >= 1; step-=2 ) {
        area += step * step;
        stoneRequired += (step-2)*(step-2);
        
        let fifthStepArea = (step-5*2)*(step-5*2);
        lapislazuliRequired = ((step - 4 * 2) * (step - 4 * 2)) - fifthStepArea;
        goldRequired = (step - 5 * 2) * (step - 5 * 2);
        marbleRequired =  area - stoneRequired - lapislazuliRequired - goldRequired;
        

    }
}

pyramid(11, 1);
pyramid(11, 0.75);
pyramid(12, 1);
pyramid(23, 0.5);