const triangle2 = (n) => {
    let result = "";
    for (let i = 1; i <= n; i++) {
        for (let j = i; j >= 1; j--) {
            result += ` ${j}`;
        }
        result += "\n";
    }
    return result;
};

// const test = triangle2(5);
// console.log(test);

module.exports = triangle2;
