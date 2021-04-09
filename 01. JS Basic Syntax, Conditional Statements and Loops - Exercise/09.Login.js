function solve(input) {
    let username = input.shift();
    let length = username.length;
    let password = '';
    for (let i = (length - 1); i >= 0; i--) {
        let letter = username[i];
        password += `${letter}`;
        
    }

    let currentPasswordTry = input.shift();
    let counter = 0;
   while ( currentPasswordTry !== password) {
        counter++;
        if ( counter == 4) {
            console.log(`User ${username} blocked!`);
            break;
        }

        if(currentPasswordTry !== password) {
            console.log('Incorrect password. Try again.');                
        }
        
        currentPasswordTry = input.shift();
    }
     
     if(currentPasswordTry === password) {
        console.log(`User ${username} logged in.`);               
     }
}

solve(['Acer','login','go','let me in','recA']);
solve(['momo','omom']);
solve(['sunny','rainy','cloudy','sunny','not sunny']);