const triangleReverse = (n) => {
    if (typeof n !== "number" && n >= 0) return;
    let output = "";
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
            output += j + "";
        }
        let reverse = output.split("").reverse().join("");
        console.log(reverse);
        output = "";
    }
};

// triangleReverse(8);

module.exports = triangleReverse;
