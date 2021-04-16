function solve(input) {
    let rotations = Number(input.pop());
    if (isNaN(rotations)) {
      console.log("Empty");
    } else {
      for (let i = 0; i < rotations; i++) {
        let lastElement = input.pop();
        input.unshift(lastElement);
      }
      console.log(input.join(' '));
    }
}

solve(['1', '2', '3', '4', '2']);
solve(['Banana', 'Orange', 'Coconut', 'Apple', '15']);
solve(['remove', 'remove', 'remove']);