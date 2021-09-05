function solve(input) {
    let obj = {};
    for( let i =0; i <= input.length-1; i++){
        let line = input[i];
        let [product, price] = line.split(' : ');
        price = Number(price);
        if(!obj.hasOwnProperty(product)){
            obj[product] = price;
        }
    }

    let entries = Object.entries(obj);
    let sortedEntries = entries.sort((a,b)=>{
        return a[0].localeCompare(b[0]);
    });
   
    let arr = [];
    for(let kvp of sortedEntries){
        if(!arr.includes(kvp[0].substring(0,1)))
        arr.push(kvp[0].substring(0,1));
    }
   
    for(let letter of arr){
        console.log(letter);
        for(let kvp of sortedEntries){
            if(kvp[0].startsWith(letter)){
                console.log(`  ${kvp[0]}: ${kvp[1]}`);                
            }
        }        
    }   
}

solve([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
  ]
  );
