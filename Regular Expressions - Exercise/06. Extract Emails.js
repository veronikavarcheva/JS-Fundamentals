function solve(input){
    let pattern = /(?<=\ )[a-z\d][a-z\.\-\_\d]+[^\-\.\_]@\w+([\-\.]\w+)+\b/g;
    for (const line of input) {
        while(result = pattern.exec(line)){
            console.log(result[0]);
        }
    }
}

solve(['Please contact us at: support@github.com.','end']);
solve(['Just send email to s.miller@mit.edu and j.hopking@york.ac.uk for more information.', 'end']);
solve(['Many users @ SoftUni confuse email addresses. We @ Softuni.BG provide high-quality training @ home or @ class. –- steve.parker@softuni.de.', 'end']);
