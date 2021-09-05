function solve(input) {
    let heroes = [];

    input.forEach((line)=>{
        let[name, level, items]=line.split(' / ');        
        heroes.push({Hero: name, level: Number(level), items: items.split(', ').sort((a, b)=> a.localeCompare(b))});        
    });
  
    heroes.sort((a,b)=>a.level - b.level);    
    heroes.forEach((hero)=>{
        console.log(`Hero: ${hero.Hero}\nlevel => ${hero.level}\nitems => ${hero.items.join(', ')}`);        
    });
}

solve([
    "Isacc / 25 / Apple, GravityGun",
    "Derek / 12 / BarrelVest, DestructionSword",
    "Hes / 1 / Desolator, Sentinel, Antara"
    ]);