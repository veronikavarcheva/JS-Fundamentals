function solve(bandName, albumName, songName) {

    let songDurationInSeconds = (albumName.length * bandName.length) * songName.length / 2;
    // console.log(songDurationInSeconds);
    let rotations = Math.ceil(songDurationInSeconds / 2.5);
    console.log(`The plate was rotated ${rotations} times.`);

    
}

solve('Black Sabbath', 'Paranoid', 'War Pigs');