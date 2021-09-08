function solve(input) {
    let arr = input.shift().split(/[, ]+/g);
    let arrFinal = [];

    for (let line of arr) {
        let patternHealth = /[^\+\-\*\/\.\d]/g;
        let patternDamage = /[\+\-]?\d+\.?\d*/g;
        let patternOperrations = /[\*\/]/g;
        let health = 0;
        let damage = 0;
        let resultHealth = patternHealth.exec(line);

        while (resultHealth) {
            let asciiCodeValue = resultHealth[0].charCodeAt(0);
            health += asciiCodeValue;
            resultHealth = patternHealth.exec(line);
        }

        let resultDamage = patternDamage.exec(line);
        while (resultDamage) {
            damage += Number(resultDamage[0]);
            resultDamage = patternDamage.exec(line);
        }

        let resultOperrations = patternOperrations.exec(line);

        while (resultOperrations) {
            if (resultOperrations[0] === '*') {
                damage = damage * 2;
            } else {
                damage = damage / 2;
            }
            resultOperrations = patternOperrations.exec(line);
        }
        arrFinal.push({ line, health, damage });
    }

    arrFinal.sort((a, b) => a.line.localeCompare(b.line));

    for (let element of arrFinal) {
        console.log(`${element.line} - ${element.health} health, ${element.damage.toFixed(2)} damage`);
    }
}

solve(['M3ph-0.5s-0.5t0.0**']);
solve(['M3ph1st0**, Azazel']);
solve(['Gos/ho']);

