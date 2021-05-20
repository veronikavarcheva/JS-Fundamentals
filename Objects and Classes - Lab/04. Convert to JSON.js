function solve(name, lastName, hairColor) {
    let person = {
        name: name,
    };
    person.lastName = lastName;
    person['hairColor'] = hairColor;
    // console.log(person);
    
    let text = JSON.stringify(person);
    console.log(text);
    

}

solve('George',
'Jones',
'Brown'
);