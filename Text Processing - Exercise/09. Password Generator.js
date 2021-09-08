function solve(input) {
    let firstString = input.shift();
    let secondString = input.shift();
    let thirdString = input.shift();
    let vowels = [, 'o', 'u', 'e', 'e'];
    let newString = firstString.concat(secondString);

    for (let i = 0; i < thirdString.length; i++) {
        for (let char of newString) {
            if (char === 'a' || char === 'o' || char === 'u' || char === 'e' || char === 'i') {
                let replacement = thirdString[i].toUpperCase();
                newString = newString.replace(char, replacement);
                if (i === thirdString.length - 1) {
                    i = 0;
                    continue;
                }
                break;
            }
        }
    }
    console.log(`Your generated password is ${reverse(newString)}`);

    function reverse(string) {
        return string.split('').reverse().join('');
    }
}

solve(['ilovepizza', 'ihatevegetables', 'orange']);
solve(['easymoneyeazylife', 'atleasttencharacters', 'absolute']);
solve(['areyousureaboutthisone', 'notquitebutitrustyou', 'disturbed']);