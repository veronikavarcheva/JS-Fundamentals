function solve(input) {
    let parkingLotInfo = {};
    let carObjectValueInfo = [];
    parkingLotInfo.car = carObjectValueInfo;

    for (let line of input) {
        let carInfo = line.split(', ');

        if (carInfo[0] === 'IN' && !carObjectValueInfo.includes(carInfo[1])) {
            carObjectValueInfo.push(carInfo[1]);
        } else if (carInfo[0] === 'OUT' && carObjectValueInfo.includes(carInfo[1])) {
            let index = carObjectValueInfo.indexOf(carInfo[1]);
            carObjectValueInfo.splice(index, 1);
        }
    }

    if (carObjectValueInfo.length === 0) {
        console.log('Parking Lot is Empty');
    } else {
        carObjectValueInfo.sort((a, b) => a.localeCompare(b));
        for (let carValue of carObjectValueInfo) {
            console.log(carValue);
        }
    }

}

solve([
    'IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU'
]);
solve(['IN, CA2844AA', 'IN, CA1234TA', 'OUT, CA2844AA', 'OUT, CA1234TA']
);