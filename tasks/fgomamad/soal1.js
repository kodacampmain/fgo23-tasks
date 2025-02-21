function createTriangle(n) {
    if (typeof n !== "number" || n <= 0) {
        return console.log(
            "Parameter harus bertipe data nomor dan harus nomor positif"
        );
    }
    for (let i = 1; i <= n; i++) {
        let result = "";
        for (let j = 1; j <= i; j++) {
            result += j;
        }
        console.log(result);
    }
}

createTriangle("abc");
// createTriangle(-1);
// createTriangle(1);
// createTriangle(2);
// createTriangle(5);

module.exports = createTriangle;
