/**
 * Task Irul
 */

const irul = require("./tasks/irul");

function tasksIrul() {
    // Program: Sum Number
    // Success
    const resultSum = irul.sumNumber(10, 50);
    console.log(resultSum);

    // Failed
    try {
        const result = irul.sumNumber("10", 30);
        console.log(result);
    } catch (error) {
        console.log(error.message);
    }
    // Program: Multiply Number
    // Success
    const resultMultiply = irul.multiplyNumbers(10, 50);
    console.log(resultMultiply);

    // Failed
    try {
        const result = irul.multiplyNumbers("10", 30);
        console.log(result);
    } catch (error) {
        console.log(error.message);
    }
    // Program: Convert Celcius to Fahrenheit
    // Success
    const temperatureResult = irul.celciusToFahrenheit(10);
    console.log(
        `the temperature ${temperatureResult.celcius}°C is ${temperatureResult.fahrenheit}°F`
    );

    // Failed
    try {
        const result = irul.celciusToFahrenheit("10", 30);
        console.log(result);
    } catch (error) {
        console.log(error.message);
    }
}
tasksIrul();

/**
 * Task "sandi"
 */

// import your tasks here
const {
    buatRentang,
    cetakTebal,
    countArray,
    processNumber,
    triangle,
    triangleReverse,
} = require("./tasks/fgosandi/index");

triangle(5);

countArray([1, 2, 3, 4, 5]);
countArray([2, 2, 2, 2, 2]);

triangleReverse(5);

processNumber([1, 2, 3, 4, 5]);

cetakTebal(3);

buatRentang(1, 5);
buatRentang(5, 10);
