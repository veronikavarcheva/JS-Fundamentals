function solve(input) {
    input.forEach((element) => {
        const info = element.split(' | ');      
        const tableInfo = {}
        tableInfo.town = info[0];
        tableInfo.latitude = Number(info[1]).toFixed(2);
        tableInfo.longitude = Number(info[2]).toFixed(2);
        console.log(tableInfo);
    });

}

solve(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625']);