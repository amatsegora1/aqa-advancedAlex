const numbers = [10, 20, 30, 40, 50];

function arrayNumbersSum (array){
     let sum = array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
     return console.log(sum);
}

arrayNumbersSum(numbers);