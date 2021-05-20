function solve(input) {
    class Song {
        constructor (typeList,name, time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }
    }

    let numberOfSongs = input.shift();
    let songs=[];
    let song = {};  
    for( let i = 0; i <= input.length-2; i++) {
        let [typeList, name, time] = input[i].split('_');
        // console.log([typeList, name, time]);
         song = new Song(typeList, name, time);
        // console.log(song);
        songs.push(song);                       
        
    }
    
    let typeSong = input.pop();
    if (typeSong === 'all') {
        songs.forEach((element)=> console.log(element.name));
        
    } else {
        let filtered = songs.filter((element)=> element.typeList === typeSong);
        filtered.forEach ((element)=>console.log(element.name));
       
        
    }
}

solve([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite']);
solve([4,
    'favourite_DownTown_3:14',
    'listenLater_Andalouse_3:24',
    'favourite_In To The Night_3:58',
    'favourite_Live It Up_3:48',
    'listenLater']);
solve([2,
    'like_Replay_3:15',
    'ban_Photoshop_3:48',
    'all']);
