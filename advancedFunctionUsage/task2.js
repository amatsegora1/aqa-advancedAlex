function recursion(number) {
    console.log(number);
    if (number <= 0) {
        return;
    }
    recursion(number - 1);
}

recursion(5);