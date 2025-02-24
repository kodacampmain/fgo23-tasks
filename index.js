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
 * Task Hakim
 */

// import your tasks here

const hakim = require("./tasks/mhakimsaputra");
function tasksHakim() {
    hakim.triangle(5);
    hakim.countArray([1, 2, 3, 4, 5]);
    hakim.triangle3(5);
    hakim.proccessNumber([1, 2, 3, 4, 5]);
    hakim.cetakTabel(3);
    hakim.buatRentang(1, 10);
}

tasksHakim();

/**
 * Task Denis
 */

const denis = require("./tasks/devbydenis/index.js");

function taskDenis() {
    console.log(denis.nomorSatu(5));
    console.log(denis.nomorDua([1, 2, 3, 4, 5]));
    console.log(denis.nomorTiga(1));
    console.log(denis.nomorEmpat([1, 2, 3, 4, 5]));
    console.log(denis.nomorLima(1));
    console.log(denis.nomorEnam(1, 5));
}

taskDenis();
