const triangle = (n) => {
    if (typeof n !== "number" && n >= 0) return;
    let output = "";
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
            output += j + "";
        }

        console.log(output);
        output = "";
    }
};

// triangle(8);

module.exports = triangle;
