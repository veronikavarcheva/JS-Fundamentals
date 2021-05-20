function solve(arrayGuests) {
    let listGuests = [];
    let copyArray = arrayGuests.slice();
    for ( let elements of copyArray) {
        let newArray = elements.split(' ');
        // console.log(elements);
        
        
       
        if( !newArray.includes('not')) {
            let name = newArray.shift();
            if(!listGuests.includes(name)){
                
                listGuests.push(name);
                continue;
            } else {
                console.log(`${name} is already in the list!`);  
                continue;          
            } 
        }

       if( newArray.includes('not')) {
        let name = newArray.shift();
           if ( listGuests.includes(name)) {
            for(let j=0; j <= listGuests.length-1; j++){
                if(listGuests[j]===name){
                    listGuests.splice(j,1);
                    continue;
                }
            }   
            
           } else if(!listGuests.includes(name)){
               console.log(`${name} is not in the list!`);
                continue;
           }
       }
    }
    console.log(listGuests.join('\n'));
    
}

solve(['Allie is going!',
'George is going!',
'John is not going!',
'George is not going!']
);
solve(['Tom is going!',
'Annie is going!',
'Tom is going!',
'Garry is going!',
'Jerry is going!']
);