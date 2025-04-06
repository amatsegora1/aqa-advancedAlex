let word = 'Hello world';
let wordSplit = word.split(" ");
let newMass = []

for (let i = wordSplit.length-1; i >=0 ; i--){
    let empty = "";
    
    for (let j = wordSplit[i].length - 1; j>=0; j--){
        empty += wordSplit[i][j];
    }
    newMass.push(empty);
}

console.log(newMass.join(' '));