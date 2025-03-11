function handleNum(number, even, odd) {
    if (number % 2 === 0) {
        even();
    }
    else {
        odd();
    }

}

function handleEven() {
    return console.log('number even')
}

function handleOdd() {
    return console.log('number odd')
}

handleNum(2, handleEven, handleOdd);
