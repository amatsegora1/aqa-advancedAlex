const numbersList = [1, 10, 14, 2, 4, 5, 43, 34]
const sortedList = numbersList.slice();

for (let i = 0; i < sortedList.length-1; i++) {
    for (let j = i+1; j < sortedList.length; j++) {
        let temp = 0;
        if (sortedList[i] > sortedList[j]) {
            temp = sortedList[i];
            sortedList[i] = sortedList[j];
            sortedList[j] = temp;
        }
    }
}

for (let item of numbersList) {
    console.log(item);
}
console.log('-----------------');
for (let item of sortedList) {
    console.log(item);
}
console.log('-----------------');

console.log(sortedList.sort((a, b) => a - b));
