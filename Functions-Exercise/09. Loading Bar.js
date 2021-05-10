function loadingBarInplementation(number) {
    let result = 0;
    let percentageResult = 0;
    switch(number){
        case 0:            
        case 10:        
        case 20:         
        case 30:            
        case 40:            
        case 50:          
        case 60:           
        case 70:
        case 80:
        case 90:
        case 100:
            result = number / 10;
            percentageResult = result/10*100;
            break;

    }
   
    let arr =[];

    let a =0; 
  while(a < result){
              
      for(let i=0;i<=9;i++){
          arr.push('%');    
         a++;
         if(a >= result) {
             break;
         }
      }

  }
 
  // console.log(arr.join(''));
  let b = 9;
  while( b >= result) {
      for(let j=9; j >=0; j--){   
          b--;     
          arr.push('.');
          if( b < result) {
              break;
          }
      }
  }
  // console.log(arr.join(''));
  let element = arr.join('');
//   console.log(`[${element}]`);
   
   if(number / 10 === 10) {
       
       console.log(`${percentageResult}% Complete!`);
       console.log(`[${element}]`);       
   } else if( number / 10 < 10 && number >= 0) {
       
       console.log(`${percentageResult}% [${element}]`);
       console.log('Still loading...');       
   }

}

loadingBarInplementation(30);
loadingBarInplementation(50);
loadingBarInplementation(100);