const triangle2 = (n) => {
    let result = "";
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
            result += ` ${j}`;
        }
        result += "\n";
    }
    return result;
};

// const test = triangle2(5);
// console.log(test);

module.exports = triangle2;
