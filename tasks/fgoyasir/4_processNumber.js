function processNumber(arrs) {
    const newArr = [];
    for (num of arrs) {
        if (num % 2 !== 0) return newArr.push(num);
        else return 1;
    }
    
    return newArr.reduce((a, b) => a * b);
}

module.exports = processNumber;
