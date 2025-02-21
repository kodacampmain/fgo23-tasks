function processNumbers(arr) {
    if (!Array.isArray(arr) || arr.some((num) => typeof num !== "number")) {
        console.log("Parameter harus berupa array of integer");
        return;
    }

    let oddNumbers = arr.filter((num) => num % 2 !== 0);
    let result =
    oddNumbers.length > 0 ? oddNumbers.reduce((acc, num) => acc * num, 1) : 1;
    console.log(result);
}

processNumbers([1, 2, 3, 4, 5]);
processNumbers([2, 4, 6, 8]);

module.exports = processNumbers;
