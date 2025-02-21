function processNumber(arrs) {
    const newArr = [];
    for (arr of arrs) {
        if (arr % 2 !== 0) return newArr.push(arr);
        else return 1;
    }
    
    return newArr.reduce((a, b) => a * b);
}

module.exports = processNumber;
