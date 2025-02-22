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
 * Task "Muhammad Rizki Pradana"
 */

const { triangle, countArray, triangle3, countArray4, cetakTabel, buatRentang } = require('./tasks/fgo-23-pradana/index')


// soal no-1
triangle(5);

// soal no-2
countArray([1, 2, 3, 4, 5]);
countArray([2, 2, 2, 2, 2]);

// soal no-3
triangle3(5);

// soal no-4
countArray4([1, 2, 3, 4, 5]);
countArray4([2, 4, 6, 8]);

// soal no-5
cetakTabel(8);

// soal no-6
buatRentang(1, 5);
buatRentang(5, 10);


// import your tasks here
