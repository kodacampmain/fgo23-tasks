const proccessNumber = (nums) => {
    if (!(nums instanceof Array)) {
        return console.log("Parameter harus bertipe data array");
    }

    let result = 1;
    for (element of nums) {
        if (element % 2 !== 0) {
            result *= element;
        } else {
            continue;
        }
    }
    return console.log(result);
};

// proccessNumber([1, 2, 3, 4, 5]);
// proccessNumber([2, 4, 6, 8]);

module.exports = proccessNumber;
