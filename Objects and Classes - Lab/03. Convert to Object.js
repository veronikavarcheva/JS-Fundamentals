function solve(text) {
    let person = JSON.parse(text);
    // console.log(person);

    for(let key in person) {
        console.log(`${key}: ${person[key]}`);        
    }
}

solve('{"name": "George", "age": 40, "town": "Sofia"}');