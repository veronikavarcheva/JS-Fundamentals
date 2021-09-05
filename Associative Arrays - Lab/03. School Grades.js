function solve(input) {
    let map = new Map();
    for (let line of input) {
        let lineArr = line.split(' ');
        let student = lineArr.shift();
        let grades = lineArr.slice().map(Number);
        if (map.has(student)) {

            let gradesToLoop = map.get(student);
            for (let elements of grades) {
                gradesToLoop.push(elements);
            }

            map.set(student, gradesToLoop);
        } else {
            map.set(student, grades);
        }
    }

    let iteratorValues = map.values();
    let arrayValues = [];

    for (let values of iteratorValues) {
        arrayValues.push(values);
    }

    let entries = Array.from(map.entries());
    let sortedEntries = entries.sort((a, b) => {
        let averageGradeA = getAverageGrade(a[1]);
        let averageGradeB = getAverageGrade(b[1]);
        return averageGradeA - averageGradeB;
    });

    function getAverageGrade(grades) {
        let sumGrades = 0;
        for (let grade of grades) {
            sumGrades += grade;
        }
        return sumGrades / grades.length;
    }

    for (let kvp of sortedEntries) {
        console.log(`${kvp[0]}: ${kvp[1].join(', ')}`);
    }

}

solve(['Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6']);