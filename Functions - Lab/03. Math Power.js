function mathPower(number, power) {
    let result = 1;
    
    for (let i = 1; i <= power; i ++){
        result *=number; 
    }
    return result;
}

console.log(mathPower(2, 8));
console.log(mathPower(3, 4));


