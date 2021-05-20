function gladiatorInventory(input) {
    let inventoryArr = input.shift().split(' ');
    let index;
    input.forEach((commandLine) => {
        let [command, equipment] = commandLine.split(' ');
        switch(command) {
            case 'Buy':
                if(inventoryArr.indexOf(equipment) === -1) {
                    inventoryArr.push(equipment);
                }
                break;
            case 'Trash':               
                if(inventoryArr.indexOf(equipment) !== -1) {
                    index = inventoryArr.indexOf(equipment);
                    inventoryArr.splice(index, 1);
                }
                break;
            case 'Repair':                
                let repairedEquipment;
                if(inventoryArr.indexOf !== -1) {
                    index = inventoryArr.indexOf(equipment);
                    repairedEquipment = inventoryArr.splice(index, 1);
                    inventoryArr.push(repairedEquipment);
                }
                break;
            case 'Upgrade':
                let upgradeEquipArr = equipment.split('-');
                let equip = upgradeEquipArr[0];
                let upgrade = upgradeEquipArr[1];               
                if(inventoryArr.indexOf(equip) !== -1) {
                    index = inventoryArr.indexOf(equip);
                    inventoryArr.splice(index+1, 0, `${equip}:${upgrade}`);
                }
                break;
        }
    });
    console.log(inventoryArr.join(' '));
}

gladiatorInventory(['SWORD Shield Spear', 'Buy Bag', 'Trash Shield', 'Repair Spear', 'Upgrade SWORD-Steel']);
gladiatorInventory(['SWORD Shield Spear', 'Trash Bow', 'Repair Shield', 'Upgrade Helmet-V']);