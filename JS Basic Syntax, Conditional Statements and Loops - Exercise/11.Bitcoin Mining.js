function bitcoin(arr) {
    let bitcoin = 11949.16;
    let oneGramOfGold = 67.51;
    let goldExchange = 0;
    let countBitcoins = 0;
    let day = 0;
    let dayOfFirstPurchase;
    let bitcoins;

    for(let i = 0; i <= arr.length-1; i++) {
        day++;
        if( day % 3 === 0) {
            goldExchange += arr[i]*0.70*oneGramOfGold;
        } else {
            goldExchange += arr[i]*oneGramOfGold;
        }

        if(countBitcoins === 0 && bitcoin <= goldExchange){
            dayOfFirstPurchase = day;                     
        }

        if(bitcoin <= goldExchange) {
            bitcoins = Math.trunc(goldExchange / bitcoin);
            countBitcoins += bitcoins;
            goldExchange -= bitcoins * bitcoin;
        }
    }

    console.log(`Bought bitcoins: ${countBitcoins}`);
    if(dayOfFirstPurchase !== undefined){
        console.log(`Day of the first purchased bitcoin: ${dayOfFirstPurchase}`); 
    }
    
    console.log(`Left money: ${goldExchange.toFixed(2)} lv.`);
    

}

bitcoin([100, 200, 300]);
bitcoin([50, 100]);
bitcoin([3124.15, 504.212, 2511.124]);
