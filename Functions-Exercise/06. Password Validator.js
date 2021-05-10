function passwordValidator(password) {

    let validationOne = (checkLength(password));
    if (!validationOne) {
        console.log('Password must be between 6 and 10 characters');        
    }

    let validationTwo = (checkOnlyLettersDigits(password));
    if (!validationTwo){
        console.log('Password must consist only of letters and digits');
    }
    
    let validationThree = (checkTwoDigitsAtLeast(password));
    if(!validationThree) {
        console.log('Password must have at least 2 digits');  
    }

    if(validationOne && validationTwo && validationThree){
        console.log('Password is valid');
        
    }

    function checkLength(password){
        let firstPassValidation = ( password.length >= 6 && password.length <= 10)
        if (firstPassValidation){
            return firstPassValidation;
        }
    }   
    
    function checkOnlyLettersDigits(password){
        let secondPassValidation;
        for( let i = 0; i <= (password.length-1); i++){ 
        secondPassValidation =(password.charCodeAt(i) >= 65 && password.charCodeAt(i) <= 90)||
        (password.charCodeAt(i)>= 97 && password.charCodeAt(i) <= 122) || 
        (password.charCodeAt(i) >= 48 && password.charCodeAt(i) <= 57) ; 
                     
            if (secondPassValidation) {
                continue;
            } else {
                break;
            }
        
        }     
        if (secondPassValidation){

        return secondPassValidation;
        } 
    }
    
    function checkTwoDigitsAtLeast (password){
        let count = 0;
        let thirdPassValidation;
        for( let i = 0; i <= (password.length-1); i++){
            thirdPassValidation = password.charCodeAt(i);
            if(thirdPassValidation >= 48 && thirdPassValidation <= 57){
                count++;
            } 
        }
        if (count >= 2){
            return thirdPassValidation;
        }
    }



  
    
    
}    



passwordValidator('logIn');
passwordValidator('MyPass123');
passwordValidator('Pa$s$s');
