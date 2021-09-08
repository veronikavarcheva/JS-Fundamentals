function solve(text) {
    let length = text.length;
    let index = (length / 2);
    let secondPart = text.substr(index);
    let firstPart = text.substr(0, index);
    let outputOne = '';

    for (let i = firstPart.length - 1; i >= 0; i--) {
        outputOne += firstPart[i];
    }

    console.log(outputOne);

    let outputTwo = '';
    for (let i = secondPart.length - 1; i >= 0; i--) {
        outputTwo += secondPart[i];
    }

    console.log(outputTwo);
}

solve('tluciffiDsIsihTgnizamAoSsIsihT');
solve('sihToDtnaCuoYteBIboJsihTtAdooGoSmI');