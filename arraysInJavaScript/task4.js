const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function equalNumbersFinder(startArray) {
    let equalNumbers = [];
    for (let i = 0; i < startArray.length; i++) {
        if (startArray[i] % 2 == 0) {
            equalNumbers.push(startArray[i]);
        }
    }
    return equalNumbers;
}

function displayArray(array) {
    for (let item of array) {
        console.log(item);
    }
}

displayArray(equalNumbersFinder(numbers));

