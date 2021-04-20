function solve(input) {
    let account = input.shift().split(' ');   
    for(let i = 0; i <= input.length -1; i++) {
        
            let [command, game] =  input[i].split(' ');
            if(command === 'Install') {
                if(!account.includes(game)){
                    account.push(game);
                }
            } else if(command === 'Uninstall'){
                if(account.includes(game)){
                    let index = account.indexOf(game);                   
                    account.splice(index, 1);
                }
            }else if (command === 'Update') {
                if(account.includes(game)){
                    let index = account.indexOf(game);                   
                    account.splice(index, 1);
                    account.push(game);
                }
            }else if (command === 'Expansion'){
                let [gameExpansion, expansion] = game.split('-');
                if(account.includes(gameExpansion)){
                    let index = account.indexOf(gameExpansion);
                    account.splice(index + 1, 0, `${gameExpansion}:${expansion}`);
                }
            } else if (command === 'Play!') {
                break;
            }
        
    }
    console.log(account.join(' '));
}

solve(['CS WoW Diablo',
'Install LoL',
'Uninstall WoW',
'Update Diablo',
'Expansion CS-Go',
'Play!']);
solve(['CS WoW Diablo',
'Uninstall XCOM',
'Update PeshoGame',
'Update WoW',
'Expansion Civ-V',
'Play!']
);