function countArray(num) {
    const arrAngka = num.reduce((acc, curr) => acc * curr);
    console.log(arrAngka);
}

module.exports = countArray;
