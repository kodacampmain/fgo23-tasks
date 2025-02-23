/**
 * Task Irul
 */

const irul = require("./tasks/irul");

function tasksIrul(){
    // Program: Sum Number
    // Success
    const resultSum = irul.sumNumber(10,50);
    console.log(resultSum);

    // Failed
    try{
        const result = irul.sumNumber("10",30);
        console.log(result);
    }catch(error){
        console.log(error.message);
    }
    // Program: Multiply Number
    // Success
    const resultMultiply = irul.multiplyNumbers(10,50);
    console.log(resultMultiply);

    // Failed
    try{
        const result = irul.multiplyNumbers("10",30);
        console.log(result);
    }catch(error){
        console.log(error.message);
    }
    // Program: Convert Celcius to Fahrenheit
    // Success
    const temperatureResult = irul.celciusToFahrenheit(10);
    console.log(`the temperature ${temperatureResult.celcius}°C is ${temperatureResult.fahrenheit}°F`);

    // Failed
    try{
        const result = irul.celciusToFahrenheit("10",30);
        console.log(result);
    }catch(error){
        console.log(error.message);
    }
}
tasksIrul();

/**
 * Task "Imanul Aufa"
 */

// import your tasks here

const iman = require("./tasks/fgoimanulaufa/index.js");

iman.triangle(8);
console.log("\n");

console.log("2", iman.countArray([1, 2, 3, 4]));
console.log("\n");

iman.triangleReverse(8);
console.log("\n");

console.log(iman.processNumber([1, 2, 3, 4, 5, 5, 7]));
console.log("\n");

iman.cetakTabel(2);
console.log("\n");

iman.buatRentang(2, 5);
