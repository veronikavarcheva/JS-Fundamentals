function solve(text) {
    let parts = text.split('\\');    
    let nameAndExtension = parts.pop();
   
    if (nameAndExtension.includes('.')) {
        let index = nameAndExtension.lastIndexOf('.');
        let name = nameAndExtension.substring(0, index);
        let extension = nameAndExtension.substring(index + 1);
        console.log(`File name: ${name}`);
        console.log(`File extension: ${extension}`);
    }
}

solve('C:\\Internal\\training-internal\\Template.pptx');
solve('C:\\Projects\\Data-Structures\\LinkedList.cs');