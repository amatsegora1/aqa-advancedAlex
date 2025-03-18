//Approach with different property names
const car1 = {
    brand1: 'BMW',
    model1: 'X5',
    year1: 2018,
}

const car2 = {
    brand2: 'Audi',
    model2: 'Q5',
    year2: 2020,
}

const car3 = { ...car1, ...car2 };

console.log(car3);

//Approach with the same property names

const firstCar = {
    brand: 'BMW',
    model: 'X5',
    year: 2018,
}

const secondCar = {
    brand: 'Audi',
    model: 'Q5',
    year: 2020,
}

const thirdCar = {
    firstCar: { ...firstCar },
    secondCar: { ...secondCar },
};

console.log(thirdCar);