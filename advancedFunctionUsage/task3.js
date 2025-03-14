function divide (numerator, denominator){
    if (typeof numerator !== 'number' || typeof denominator !== 'number'){
        throw new Error ('enter valid values')
    }
    else if (denominator === 0){
        throw new Error ('denominator can not be 0')
    }
    else {
        return numerator / denominator;
    }
}

try {
    const result = divide (10, 0);
    console.log(result);
} catch (error){
    console.error("Error:", error.message);
} finally {
    console.log('Calculation completed!');
 }

