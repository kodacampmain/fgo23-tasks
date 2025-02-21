const processNumber = (arr) => {
    if (!(arr instanceof Array)) return;
    evenNum = [];
    let total = 1;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            evenNum.push(arr[i]);
        }
    }

    if (evenNum.length === 0) evenNum = [1];

    for (let i = 0; i < evenNum.length; i++) {
        total = total * evenNum[i];
    }
    return total;
};

// console.log(processNumber([1, 2, 3, 4, 5, 5, 7]));

module.exports = processNumber;
