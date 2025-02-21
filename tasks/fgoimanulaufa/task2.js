const countArray = (arr) => {
    let total = 1;
    for (let i = 0; i < arr.length; i++) {
        total = total * arr[i];
    }
    return total;
};

// console.log(countArray([1, 2, 3, 4]));

module.exports = countArray;
