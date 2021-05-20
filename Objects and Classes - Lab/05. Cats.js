function solve(array) {
    class Cat{        
        constructor (name, age) {
            this.name = name;
            this.age = age;        
        }

        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
            
        }
    }
    let cats =[];
    for ( let i =0; i <= array.length-1; i++) {
        let [name, ageText] = array[i].split(' ');
        // console.log([name, ageText]);
        let cat = new Cat(name,Number(ageText));
        // cat.meow();
        cats.push(cat);
    }

    for( const cat of cats){
        cat.meow();
    }
}

solve(['Mellow 2', 'Tom 5']);