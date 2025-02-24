const calc = require("./calc");
const temperature = require("./temperature");

module.exports = {
    sumNumber: calc.sumNumbers,
    multiplyNumbers: calc.multiplyNumbers,
    celciusToFahrenheit: temperature.celciusToFahrenheit
};
