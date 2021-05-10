function factoralDivision (n, m) {

    let firstSum = 1;
    for(let i =1; i <= n; i++) {
        firstSum *=i;
    }
    
    let secondSum = 1;
    for( let j= 1; j <= m; j++) {
        secondSum *= j;
    }

    let resultOfDevision = (firstSum / secondSum);
    console.log(resultOfDevision.toFixed(2));
                                           

}

factoralDivision(5, 2);
factoralDivision(6, 2);