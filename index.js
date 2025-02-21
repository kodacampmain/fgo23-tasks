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
 * Task Rohman
 */

// import your tasks here

const {
    triangle,
    hasilPerkalian,
    triangle2,
    //   number,
    angka,
    buatRentang,
} = require("./tasks/fgorohman");

console.log(triangle(5));
console.log("\n");
hasilPerkalian([1, 2, 3, 4, 5]);
hasilPerkalian([2, 2, 2, 2, 2]);
console.log("\n");
triangle2(5);
// number([1, 2, 3, 4, 5]);
angka(9);
buatRentang(1, 10);
