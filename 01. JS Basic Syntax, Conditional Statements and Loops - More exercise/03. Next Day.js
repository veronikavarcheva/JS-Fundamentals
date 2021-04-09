function solve(year, month, day) {
    
    let date = new Date(year, month - 1, day);
    let oneDay = 24 * 60 * 60 *1000// 86 400 000 milliseconds in one day
    let nextDay = new Date (date.getTime() + oneDay);
    
    console.log(nextDay.getFullYear() + '-' + (nextDay.getMonth() +1) + '-' + nextDay.getDate());
    

}

solve(2016, 9, 30);

 
