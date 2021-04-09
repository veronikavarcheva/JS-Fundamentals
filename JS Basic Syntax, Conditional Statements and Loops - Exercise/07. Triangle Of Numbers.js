function solve(n) {
   
  for (let row = 1; row <= n; row++) {
      let output = ""; 
      for (let col = 1; col <= row; col++) {
          output += `${row} `; 
         
        }
        console.log(output);
    }  
  
    
}

solve(3);
solve(5);
solve(6);