function* fibonacciRecursive(a = 0, b = 1) {
    yield a;
    yield* fibonacciRecursive(b, a + b);
}

// Приклад використання
const fibGen = fibonacciRecursive();
console.log(fibGen.next().value); // 0
console.log(fibGen.next().value); // 1
console.log(fibGen.next().value); // 1
console.log(fibGen.next().value); // 2
console.log(fibGen.next().value); // 3
console.log(fibGen.next().value); // 5
console.log(fibGen.next().value); // 8
