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
 * Task Rieza
 */

// import your tasks here

const rieza = require("./tasks/fgorieza/index.js");

function taskRieza() {
    console.log(rieza.triangleAs("abc"));
    console.log(rieza.triangleAs(-1));
    console.log(rieza.triangleAs(1));
    console.log(rieza.triangleAs(2));
    console.log(rieza.triangleAs(5));
    console.log(rieza.countArray([1, 2, 3, 4, 5]));
    console.log(rieza.countArray([2, 2, 2, 2, 2]));
    console.log(rieza.triangleDes("abc"));
    console.log(rieza.triangleDes(-1));
    console.log(rieza.triangleDes(1));
    console.log(rieza.triangleDes(2));
    console.log(rieza.triangleDes(5));
    console.log(rieza.processNumber([1, 2, 3, 4, 5]));
    console.log(rieza.processNumber([2, 4 , 6, 8]));
    console.log(rieza.cetakTabel("abc"));
    console.log(rieza.cetakTabel(-1));
    console.log(rieza.cetakTabel(3));
    console.log(rieza.buatRentang(1, 5));
    console.log(rieza.buatRentang(5, 10));
}

tasksRieza();