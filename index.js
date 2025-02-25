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

console.log("\n");
const rohman = require("./tasks/fgorohman");

function tasksRohman() {
    const resultTriangle = rohman.triangle(5);
    console.log(`${resultTriangle}`);

    const resultHasilPerkalian = rohman.hasilPerkalian([1, 2, 3, 4, 5]);
    console.log(`${resultHasilPerkalian} \n`);

    const resultTriangle2 = rohman.triangle2(5);
    console.log(`${resultTriangle2} \n`); // console.log(resultTriangle2);

    const resultNumber = rohman.number([1, 2, 3, 4, 5]);
    console.log(`${resultNumber} \n`); // console.log(resultNumber);

    const resultAngka = rohman.angka(10);
    console.log(`${resultAngka} \n`); // console.log(resultAngka);

    const resultBuatRentang = rohman.buatRentang(1,10);
    console.log(`${resultBuatRentang}`);

}

tasksRohman();
