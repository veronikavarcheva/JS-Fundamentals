function solve(input) {
   let result = {};
    input.forEach((element)=>{
        let object = JSON.parse(element);
        let entries = Object.entries(object)[0];
        let term = entries[0];  
        let definition = entries[1];
        result[term]=definition; 
    });
   
    let arrResult = Object.entries(result);
    let sortedArrResult = arrResult.sort((a,b)=> a[0].localeCompare(b[0]));
   
    for( let kvp of sortedArrResult){
        console.log(`Term: ${kvp[0]} => Definition: ${kvp[1]}`);        
    }
}

solve([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
    ]);
