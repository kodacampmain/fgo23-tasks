function processNumber(num) {
    let result = 1;
    let has = false;

    for (let i = 0; i < num.length; i++) {
        if (num[i] % 2 !== 0) {
            result += num[i];
            has = true;
        }
    }
    return has ? result : 1;
}

// console.log(processNumber([1, 2, 3, 4, 5]));
// console.log(processNumber([2, 4, 6, 8]));

module.exports = processNumber();
