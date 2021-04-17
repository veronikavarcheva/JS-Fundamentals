function solve(arr) {
   let arrNew = [arr[0]];
   for(let i =0; i <= arr.length -1; i++) {
       if(arrNew[arrNew.length-1] <= arr[i+1]){
           arrNew.push(arr[i+1]);
       } else {
           continue;
       }
   }

   console.log(arrNew.join(' '));

}

solve([ 1, 3, 8, 4, 10, 12, 3, 2, 24]);
solve([ 1, 2, 3, 4]);
solve([ 20, 3, 2, 15, 6, 1]);