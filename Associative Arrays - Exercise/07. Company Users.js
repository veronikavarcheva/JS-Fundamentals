function solve(input){
  let obj = {};

  input.forEach((line)=>{
    let [companyName, user] = line.split(' -> ');
    if(!obj.hasOwnProperty(companyName)){
      obj[companyName]= new Set();
    }
    obj[companyName].add(user);     
  });
 
  let keys = Object.keys(obj);
 
  let sortedKeys = keys.sort((a,b)=>a.localeCompare(b));

  for( let key of sortedKeys){
    console.log(`${key}`);
    obj[key].forEach((user)=>{
      console.log(`-- ${user}`);
    });    
  } 
}

solve([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'
  ]);
  solve(['SoftUni -> AA12345',
    'SoftUni -> CC12344',
    'Lenovo -> XX23456',
    'SoftUni -> AA12345',
    'Movement -> DD11111'
  ]);