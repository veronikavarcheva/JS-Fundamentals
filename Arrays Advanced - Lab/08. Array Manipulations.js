function solve(input) {

    let numbers = input.shift().split(' ').map(Number);
    
    // console.log(numbers);
    // console.log(input);
    

    // ***Destructuring:
    for(let i =0; i <input.length; i++) {
        let [command,firstNum, secondNum] = input[i].split(' ');
        
        
        
        firstNum = Number(firstNum);
        secondNum = Number(secondNum);
    

        switch(command) {
            case 'Add':
                let add = number =>numbers.push(number);               
                add(firstNum);
                break;
            case 'Remove':
                let remove = num =>numbers = numbers.filter(el => el !== num);
                remove(firstNum);
                break;
            case 'RemoveAt':
                let removeAt = index =>numbers.splice(index, 1);
                removeAt(firstNum);
                break;
            case 'Insert':
                let insert = (index, num)=>numbers.splice(index,0, num);                
                insert(secondNum, firstNum);
                break;
        }
   
    }

    console.log(numbers.join(' '));
    
}

solve(['4 19 2 53 6 43','Add 3','Remove 2','RemoveAt 1','Insert 8 3']);