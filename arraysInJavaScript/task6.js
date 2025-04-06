const numbersList = [1, 10, 14, 2, 4, 5, 43, 34]
const listForSortingFirst = numbersList.slice();
const listForSortingSecond = numbersList.slice();

function arraySortingUsingCycle(array) {
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = i + 1; j < array.length; j++) {
            let temp = 0;
            if (array[i] > array[j]) {
                temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        }
    }
    return array;
}

// function arraySortingUsingSortMethod(array) {
//     array.sort((a, b) => a - b);
//     return array;
// }

function displayArray(array) {
    for (let item of array) {
        console.log(item);
    }
}
console.log('Initial array:')
displayArray(numbersList);
console.log('Array sorted by cycle:')
displayArray(arraySortingUsingCycle(listForSortingFirst));
console.log('Array sorted by Sort Method:')
displayArray(arraySortingUsingCycle(listForSortingSecond));