function solve(products) {
    let sorted = products.sort();
    for(let i = 0; i <= sorted.length-1; i++){
     
       console.log(`${i+1}.${sorted[i]}`);
       
    }
    
    
}

solve(["Potatoes", "Tomatoes", "Onions", "Apples"]);
