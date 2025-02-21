const buatRentang = (num1, num2) => {
    let result = [];

    for (let i = num1; i <= num2; i++) {
        result.push(i);
    }

    return result.join(", ");
};

// console.log(buatRentang(1, 5));
// console.log(buatRentang(5, 10));

module.exports = buatRentang;
