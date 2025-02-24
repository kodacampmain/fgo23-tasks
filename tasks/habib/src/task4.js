function triangleOdd(arr) {
    const odd = arr.filter((input) => input % 2 === 1);
    if (odd.length === 0) return console.log(1);
    return console.log(odd.reduce((a, b) => a * b));
}

module.exports = triangleOdd;
