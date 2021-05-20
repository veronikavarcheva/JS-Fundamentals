function solve(train) {

    let wagonsWithPassengers = train.shift().split(' ').map(Number);
    let maxCapacity = Number(train.shift());

   for( let i = 0; i <=train.length-1; i++) {
       let [command, passengers] = train[i].split(' ');
      passengers = Number(passengers);
       if ( train[i].split(' ').length === 2) {
           let add = num => wagonsWithPassengers.push(num);
           add(passengers);          
       } else if ( train[i].split(' ').length !== 2) {
            for ( let j =0; j <= wagonsWithPassengers.length-1;j++) {
                if (Number(wagonsWithPassengers[j]) + Number(train[i])<= maxCapacity) {
                     wagonsWithPassengers[j] = Number(wagonsWithPassengers[j]) + Number(train[i]);
                    break;
                }
            }
        }
   }   
  
   console.log(wagonsWithPassengers.join(' '));
  
   
}

solve(['32 54 21 12 4 0 23',
'75',
'Add 10',
'Add 0',
'30',
'10',
'75']
);
solve(['0 0 0 10 2 4',
'10',
'Add 10',
'10',
'10',
'10',
'8',
'6']
);