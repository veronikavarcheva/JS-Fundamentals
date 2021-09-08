function solve(input) {
    let stringArr = input.split(' ');

    for (let i = 0; i <= stringArr.length - 1; i++) {
        if (stringArr[i] === '') {
            stringArr.splice(i, 1);
            i -= 1;
        }
    }

    let englishAlphabetLowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let englishAlphabetUpperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    let sum = 0;
    for (let i = 0; i <= stringArr.length - 1; i++) {
        let string = stringArr[i];
        let lengthString = string.length;
        let number = string.substring(1, lengthString - 1);

        if (englishAlphabetUpperCase.includes(string[0])) {
            let positionString = englishAlphabetUpperCase.indexOf(string[0]) + 1;
            number = number / positionString;
        } else if (englishAlphabetLowerCase.includes(string[0])) {
            let positionString = englishAlphabetLowerCase.indexOf(string[0]) + 1;
            number = number * positionString;
        }

        if (englishAlphabetUpperCase.includes(string[lengthString - 1])) {
            let positionString = englishAlphabetUpperCase.indexOf(string[lengthString - 1]) + 1;
            number = number - positionString;
        } else if (englishAlphabetLowerCase.includes(string[lengthString - 1])) {
            let positionString = englishAlphabetLowerCase.indexOf(string[lengthString - 1]) + 1;
            number = number + positionString;
        }
        sum += number;

    }
    let result = sum.toFixed(2)
    console.log(result);
}

solve('A12b s17G');
solve('P34562Z q2576f   H456z');
solve('a1A');