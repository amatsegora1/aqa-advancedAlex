const numbers = [1, 2, 3, 4, 5];

function multyArray(array) {
    let newNumbers = array.map((number, index) => number * index);
    return newNumbers;
}

function displayArray(array) {
    for (let item of array) {
        console.log(item);
    }
}

displayArray(multyArray(numbers));
