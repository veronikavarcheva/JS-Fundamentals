function solve(input) {
    let elements = new Map();
    let array = input.split(' ').map((el) => el.toLowerCase());
  
    for (let element of array) {
        let counter = 0;
        for (let i = array.length - 1; i >= 0; i--) {
            if (element === array[i]) {
                counter++;
            }
        }
        elements.set(element, counter);
    }

    let kvpArr = Array.from(elements.entries());
    let output = '';

    for (let kvp of kvpArr) {
        if (kvp[1] % 2 !== 0) {
            output += kvp[0] + ' ';
        }
    }
    console.log(output);
}

solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');