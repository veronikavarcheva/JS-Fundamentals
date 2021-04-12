function solve(distance, passengers, fuelPrice) {

    let neededFuel = distance/ 100 * 7;
    let fuealAdditionalConsumation = passengers * 0.100;
    let totalNeededFuel = neededFuel + fuealAdditionalConsumation;
    let neededMoney = fuelPrice * totalNeededFuel;

    console.log(`Needed money for that trip is ${neededMoney} lv.`);
    
}

solve(260, 9, 2.49);
solve(90, 14, 2.88);