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
 * Task "Person Name"
 */

// import your tasks here
/**
 * Task "Person Name"
 */
const {
  triangle,
  countArray,
  prinstSegitiga,
  countArrayOdd,
  cetakTabel,
  buatRentang,
} = require("./tasks/habib/index.js");

triangle(5);
countArray([1, 2, 3, 4, 5]);
countArray([2, 2, 2, 2, 2]);
prinstSegitiga(5);
countArrayOdd([1, 2, 3, 4, 5]);
countArrayOdd([2, 4, 6, 8]);
cetakTabel(3);
buatRentang(1, 5);
buatRentang(5, 10);

// import your tasks here
