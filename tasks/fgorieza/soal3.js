function triangleDes(n) {
    if (typeof n == "string" || n < 0) {
        console.log("Parameter harus bertipe data nomor dan harus nomor positif");
    }
    let result = "";
    for (let i = 1; i <= n; i++) {
        let baris = "";
        for (let j = i; j >= 1; j--) {
            baris += j + " ";
        }
        result += baris.trim() + (i < n ? "\n" : "");
    }
    console.log(result);
}

// triangleDes("abc");
// console.log("\n");
// triangleDes(-1);
// console.log("\n");
// triangleDes(1);
// console.log("\n");
// triangleDes(2);
// console.log("\n");
// triangleDes(5);

module.exports = triangleDes();
