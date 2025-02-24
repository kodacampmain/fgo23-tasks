function triangle(n) {
    if (typeof n !== "number") {
        console.log("Parameter harus bertipe");
    }
    if (n < 1) {
        console.log("parameter harus lebih dari 0");
    }

    for (let i = 1; i <= n; i++) {
        let result = "";
        for (let j = 1; j <= i; j++) {
            result += j;
        }
        console.log(result);
    }
}

module.exports = triangle;
