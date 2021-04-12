function solve(startingYield) {
   startingYield = Number(startingYield);
    let daysCount = 0;
    let totalExtractedSpice = 0;
    
 

    while (startingYield >= 100) {
        totalExtractedSpice += (startingYield - 26);
        startingYield -= 10;
        daysCount++
       
        
    }
    console.log(daysCount);

  if (startingYield >= 26){
    totalExtractedSpice -=26;
  }
     
   
    console.log(Math.max(totalExtractedSpice, 0));
   

}

solve(111);