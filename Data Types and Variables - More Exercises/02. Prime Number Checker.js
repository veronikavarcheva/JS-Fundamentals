function solve(num) {
   if(num % num === 0 && num % 1 === 0 && num !== 0 && num!== 1) {
       if( num % 2 !== 0 && num % 3 !== 0) {
           console.log('true');
       } else {
           console.log('false');
       }
   }
}

solve(7);
solve(8);
solve(81);