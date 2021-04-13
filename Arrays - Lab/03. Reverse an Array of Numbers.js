function solve(n, array) {
let newArr = [];

for (let i = 0; i < n; i++){
     newArr[i] = array[i];
    
    
}
let output = '';
for(let j = newArr.length-1; j >= 0; j--){
    output += `${Number(newArr[j])} `;
}
console.log(output);

}

solve(3, [10, 20, 30, 40, 50]);
solve(4, [-1, 20, 99, 5]);
solve(2, [66, 43, 75, 89, 47]);
