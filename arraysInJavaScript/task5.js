const firstArray = [10, 20, 30, 40, 50];
const secondArray = [1, 2, 3, 4, 5];

function arrayMergeUsingCycle(arrayFirst, arraySecond) {
    let newArray = [];

    for (let i = 0; i < arrayFirst.length; i++) {
        newArray.push(arrayFirst[i]);
    }

    for (let i = 0; i < arraySecond.length; i++) {
        newArray.push(arraySecond[i]);
    }

    return newArray;

}

function arrayMergeByContactMethod(arrayFirst, arraySecond) {
    let mergedArray = arrayFirst.concat(arraySecond);
    return mergedArray;
}

function displayArray(array) {
    for (let item of array) {
        console.log(item);
    }
}

console.log('Array merged using cycle:')
displayArray(arrayMergeUsingCycle(firstArray, secondArray));
console.log('Array merged using Contact method:')
displayArray(arrayMergeByContactMethod(firstArray, secondArray));