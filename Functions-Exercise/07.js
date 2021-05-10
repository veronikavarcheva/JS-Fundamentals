  
function matrix(n) {
    for (let i = 0; i < n; i++) {
      let str = n.toString() + " ";
      console.log(str.repeat(n));
    }
  }
  matrix(3);
  matrix(7);
  matrix(2);