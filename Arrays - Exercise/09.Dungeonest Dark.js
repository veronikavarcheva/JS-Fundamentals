function dungeonRooms(rooms) {
    let separatedRooms = rooms[0].split('|');
    let health = 100;
    let coins = 0;
    let roomsCount= 0;  
    let maxHealth= 100;

    for (let i = 0; i < separatedRooms.length; i++) {
        let element = separatedRooms[i];
        roomsCount++;
        let item = element.split(' ');
        let number = Number(item[1]);
        if(item[0] === 'potion'){
            if (health + number <= 100) {
                toIncreaseHealth = maxHealth - health;
                if (number > toIncreaseHealth) {
                    number = toIncreaseHealth;
                }

                health += number;
              
            } else if (health + number > 100) {
                toIncreaseHealth = maxHealth - health;
                if (number > toIncreaseHealth) {
                    number = toIncreaseHealth;
                }
                health += number;             
            }
            console.log(`You healed for ${number} hp.`);
            console.log(`Current health: ${health} hp.`);
         
        } else if (item[0] === 'chest') {
                coins += number;
                console.log(`You found ${number} coins.`);
            

        } else {
                health -= number;
                if (health > 0) {
                console.log(`You slayed ${item[0]}.`);
                } else {
                console.log(`You died! Killed by ${item[0]}.`);
                console.log(`Best room: ${roomsCount}`);
                return;               
                }

        }

    }
    
    console.log("You've made it!");
    console.log(`Coins: ${coins}`);
    console.log(`Health: ${health}`);

}

dungeonRooms(['rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000']);
dungeonRooms(['cat 10|potion 30|orc 10|chest 10|snake 25|chest 110']);