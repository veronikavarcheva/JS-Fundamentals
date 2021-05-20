function arrManipulator(arrIntegersOriginal, arrStringCommands) {
    let arrIntegers = arrIntegersOriginal.slice(0); 
    let output = [];
    arrStringCommands.forEach((command) => {
        let [commandName, index, ...elements] = command.split(' ');
        index = Number(index);

        switch(commandName) {
            case 'add':
                elements[0]= Number(elements[0]);
                arrIntegers.splice(index, 0, elements[0]);
                break;
            case 'addMany':
                for(let element of elements) {
                    element = Number(element);
                    arrIntegers.splice(index, 0, element);
                    index++;
                };
                break;
            case 'contains':
                const elem = index;
                const indexOfElem = arrIntegers.indexOf(elem);
                console.log(indexOfElem);
                break;
            case 'remove':
                arrIntegers.splice(index, 1);
                break;
            case 'shift':
               positions = index;
                for(let i = 0; i <positions; i++) {
                    const shiftedElement = arrIntegers.shift();
                    arrIntegers.push(shiftedElement);
                }
                break;
            case 'sumPairs':
              if(arrIntegers.length % 2 === 0) {
                  for(let i = 0; i < arrIntegers.length; i+= 2) {
                      output.push(arrIntegers[i] + arrIntegers[i+1]);
                  }
              } else {
                for(let i = 0; i < arrIntegers.length-1; i+= 2) {
                    output.push(arrIntegers[i] + arrIntegers[i+1]);
                }
                output.push(arrIntegers.pop());

              }
                arrIntegers = output;
                output = [];
                break;
            case 'print':
                console.log('[ ' + arrIntegers.join(', ') + ' ]');
                break;
        }
    });
}

arrManipulator([1, 2, 4, 5, 6, 7],['add 1 8', 'contains 1', 'contains 3', 'print']);
arrManipulator([1, 2, 3, 4, 5],['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print']);
arrManipulator([2, 2, 4, 2, 4], ["add 1 4", "sumPairs", "print"]);
