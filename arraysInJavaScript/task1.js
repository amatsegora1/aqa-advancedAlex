const numbers = [2, -5, 0, 7, -3, 0, 10, -8];
let positiveCount = 0;
let negativeCount = 0;
let zeroCount = 0;

function arrayNumbersDefinition(positive, negative, zero) {
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > 0) {
            positive++;
        }
        else if (numbers[i] < 0) {
            negative++;
        }
        else {
            zero++;
        }

    }
    return console.log('Positive count ' + positive + '\n' + 'Negative count ' + negative + '\n' + 'Zero count ' + zero);
}

arrayNumbersDefinition(positiveCount, negativeCount, zeroCount);

