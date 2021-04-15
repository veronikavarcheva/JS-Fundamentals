function solve(input) {
    let arrIndLength = Number(input[0]);   
    let arrFullIndexes = input[1].split(' ').map(Number);
    let arrPrint = [];
    let command;
    let ladybugIndex;
    let direction;
    let flyLength;
    let commandArr;
    

    let n = 0;
    while (n < arrIndLength) {
        arrPrint.push(0);
        n++;
    }

    for (let i = 0; i < arrIndLength; i++) {
        let ladybugIndex = arrFullIndexes[i];
        if( ladybugIndex >= 0  && ladybugIndex < arrIndLength) {
            arrPrint[ladybugIndex] = 1;
        }
    }

    for (let i = 2; i <= input.length - 1; i++) {
        command = input[i];
        commandArr = command.split(' ');
        ladybugIndex = Number(commandArr[0]);
        direction = commandArr[1];
        flyLength = Number(commandArr[2]);

        if (arrPrint[ladybugIndex] !== 1 || ladybugIndex < 0 || ladybugIndex >= arrPrint.length) {
            continue;
        }

        if (flyLength < 0) {
            flyLength = Math.abs(flyLength);
            if (direction === 'right'){
                direction = 'left';
            }else if (direction = 'left') {
                direction = 'right';
            }
        }

        arrPrint[ladybugIndex] = 0;

       if (direction === 'right') {
           let newIndex = ladybugIndex + flyLength;
           if(arrPrint[newIndex] === 1) {
               newIndex += flyLength;
           }
           if(newIndex <= arrPrint.length){
               arrPrint[newIndex] = 1;
           }
        } else {
            let newIndex = ladybugIndex - flyLength;
            if(arrPrint[newIndex] === 1) {
                newIndex -= flyLength;
            }
            if(newIndex >= 0){
                arrPrint[newIndex] = 1;
            }
           
        }
    }
    let str = '';
        for( let i = 0; i <= arrIndLength -1; i++){
            str += arrPrint[i] + ' ';
        }
        console.log(str);
   
    
}


solve([3, '0 1', '0 right 1', '2 right 1']);
solve([3, '0 1 2', '0 right 1', '1 right 1', '2 right 1']);
solve([5, '3', '3 left 2', '1 left -2']);