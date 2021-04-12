function solve(n) {
    let length = Number(n);
    let colour = 'black';
    let previousColour = '';
    console.log(`<div class="chessboard">`);
  
    for(let div = 1; div <= length; div++){
        console.log(` <div>`);
        for( let span = 1; span <= length; span++) {
            console.log(`  <span class="${colour}"></span>`);
            previousColour = colour;
           if(previousColour === "black") {
            colour= 'white';
           } else {
            colour = 'black';
           }
        }
        console.log(` </div>`);     
        if (length % 2 === 0) {
            previousColour = colour;
            if(previousColour === "black") {
                colour= 'white';
               } else {
                colour = 'black';
               }
        }   
    }
    console.log(`</div>`);
    
}

solve(3);


  
