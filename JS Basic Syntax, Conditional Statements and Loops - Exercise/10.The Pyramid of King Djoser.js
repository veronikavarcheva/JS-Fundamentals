function pyramid(n, increment) {
    let totalStone = 0;
    let totalMarble = 0;
    let totalLapis = 0;
    let totalGold = 0;
    let counter = 0;
    let base = n;
  
    while (base > 2) {
      let marbel = base * 4 - 4;
      let stone = base * base - marbel;
      totalStone += stone;
  
      counter++;
      if (counter % 5 === 0) {
        totalLapis += marbel;
      } else {
        totalMarble += marbel;
      }
      base -= 2;
    }
    counter++;
    let gold = base * base;
  
    stone = Math.ceil(totalStone * increment);
    marble = Math.ceil(totalMarble * increment);
    lapis = Math.ceil(totalLapis * increment);
    totalGold = Math.ceil(gold * increment);
    totalHeight = Math.floor(counter * increment);
  
    console.log(`Stone required: ${stone}`);
    console.log(`Marble required: ${marble}`);
    console.log(`Lapis Lazuli required: ${lapis}`);
    console.log(`Gold required: ${totalGold}`);
    console.log(`Final pyramid height: ${totalHeight}`);
  }



  pyramid(11, 1);
  pyramid(11, 0.75);
  pyramid(12, 1);
  pyramid(23, 0.5);
