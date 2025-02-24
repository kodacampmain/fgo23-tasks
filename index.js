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
 * Task "Habib Muhammad Rizki"
 */
const tasksHabib = require("./tasks/habib/index.js");

// Soal no 1
tasksHabib.triangle(5);

// Soal no 2
tasksHabib.countArray([1, 2, 3, 4, 5]);
tasksHabib.countArray([2, 2, 2, 2, 2]);

// Soal no 3
tasksHabib.prinstSegitiga(5);

// Soal no 4
tasksHabib.countArrayOdd([1, 2, 3, 4, 5]);
tasksHabib.countArrayOdd([2, 4, 6, 8]);
// Soal no 5
tasksHabib.cetakTabel(3);
// Soal no 6
tasksHabib.buatRentang(1, 5);
tasksHabib.buatRentang(5, 10);

// import your tasks here
