function oddOrEven (number) {

   let sumEven = 0;
   let sumOdd = 0; 
    
    function sumEvenDigits (x) {
        let text = x.toString();
        for( let i = 0; i < text.length; i++){
            let num = Number(text[i]);
            if(num % 2 === 0) {
                sumEven += num;
            }
        }
        return sumEven;
    }

    function sumOddDigits (y) {
        let text = y.toString();
        for( let i = 0; i < text.length; i++){
            let num = Number(text[i]);
            if(num % 2 === 1) {
                sumOdd += num;
            }
        }
        return sumOdd;
    }
    let odd = sumOddDigits (number);
    let even = sumEvenDigits(number);
    console.log(`Odd sum = ${odd}, Even sum = ${even}`);
}   

oddOrEven(1000435);
oddOrEven(3495892137259234);

