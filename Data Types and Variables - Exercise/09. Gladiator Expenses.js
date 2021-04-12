function solve(fightsCount, helmetPrice, swordPrice, shieldPrice, armourPrice) {
    let helmetRepairs = Math.trunc(fightsCount / 2);
    let swordRepairs = Math.trunc(fightsCount / 3);
    let shieldRepairs = Math.trunc( fightsCount / 6);
    let armourRepairs = Math.trunc(shieldRepairs / 2);
    let expences = helmetPrice * helmetRepairs + swordPrice * swordRepairs + shieldRepairs * shieldPrice + armourPrice * armourRepairs;

    console.log(`Gladiator expenses: ${expences.toFixed(2)} aureus`);
    


}

solve(7, 2, 3, 4, 5);
solve(23, 12.50, 21.50, 40, 200);