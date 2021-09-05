function solve(input) {
    let object = {};
    
    for( let element of input){
      object.name = element;
      let elementLength = element.length;
      object['Personal number'] = elementLength;
    //   console.log(object);
    let values = Object.values(object);
    // console.log(values);
    console.log(`Name: ${values[0]} -- Personal Number: ${values[1]}`);
    }  
}

solve([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]);