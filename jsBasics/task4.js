import chalk from 'chalk';

//Const data
const pNumber = Math.PI;
const log = console.log;

//Circle data
let circleRadius = 10;

//Rectangle data
let rectangleLength = 10.59;
let rectangleWidth = 20.2567894;

//Cylinder data
let cylinderRadius = 2.35;
let cylinderHeight = 3.35;

//Circle area
let circleArea = Math.round((pNumber * circleRadius ** 2) * 100) / 100;

//Rectangle area
let rectangleArea = Math.round((rectangleLength * rectangleWidth) * 100) / 100;

//Cylinder volume
let cylinderVolume = Math.round((pNumber * cylinderRadius * cylinderHeight) * 100) / 100;

//Results
log(chalk.red.bold(`Circle area: ${circleArea}\n`) + chalk.green.bold(`Rectangle area: ${rectangleArea}\n`) + chalk.blue.bold(`Cylinder volume: ${cylinderVolume}`));
