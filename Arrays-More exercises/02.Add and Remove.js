function solve(commandArr) {
    let num = 0;
    let arr = [];
   
    for( let i = 0; i < commandArr.length; i++) {
        if(commandArr[i] === 'add') {           
            num++;
            arr.push(num);
        } else if( commandArr[i] === 'remove'){
            num++;
            arr.pop();
        }
    }   

    if(arr.length > 0) {
        console.log(arr.join(' '));
    } else {
        console.log('Empty');
    }
}

solve(['add', 'add', 'add', 'add']);
solve(['add', 'add', 'remove', 'add', 'add']);
solve(['remove', 'remove', 'remove']);
