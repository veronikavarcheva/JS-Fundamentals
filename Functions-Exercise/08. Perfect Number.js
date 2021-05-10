function solve(perfectNum) {

    let check = isPerfect(perfectNum);
    if(check){
        console.log('We have a perfect number!');        
    } else {
        console.log('It\'s not so perfect.');        
    }

    function isPerfect(n){
        let isPerfectNumber = true;
        let sumOfProperPositiveDevisors = 0;
        for( let i = 1; i < n; i++) {
            let positiveDevisor = i;
            if( n % positiveDevisor === 0) {
                sumOfProperPositiveDevisors +=positiveDevisor;
            }
        }

        if(sumOfProperPositiveDevisors === n) {
            return isPerfectNumber;
        }
    }
}

solve(6);
solve(28);
solve(1236498);