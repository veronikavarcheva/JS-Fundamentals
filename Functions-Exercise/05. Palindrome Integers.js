function palindromeCheck(possitiveIntegers){
    let isPalindrome;
    for(let i = 0; i < possitiveIntegers.length; i++) {
        // console.log(element);
        // console.log(possitiveIntegers.length);
        
        
        let text = possitiveIntegers[i].toString();
        let textLength = text.length;  
        let palindrome = '';
       
        
        for(let j=textLength-1; j>=0; j--){
            palindrome +=text[j];
            
        }  
        let palindromeNumber = parseInt(palindrome);
        if(palindromeNumber !== possitiveIntegers[i]){
            isPalindrome = false;
        } else {
            isPalindrome = true;
        }
        console.log(isPalindrome);       
    }
    
  
  
    
   
}
palindromeCheck([123,323,421,121]);
palindromeCheck([32,2,232,1010]);
