function triangleAs(n) {
    if (typeof n == "string" || n < 0) {
        console.log("Parameter harus bertipe data nomor dan harus nomor positif");
    } else {
        for (let i = 1; i <= n; i++) {
            let baris = [];
            for (let j = 1; j <= i; j++) {
                baris.push(i);
            }
            console.log (baris.join(" "));
        }
    }
}

// triangleAs("abc");
// console.log("\n");
// triangleAs(-1);
// console.log("\n");
// triangleAs(1);
// console.log("\n");
// triangleAs(2);
// console.log("\n");
// triangleAs(5);

module.exports = triangleAs();
