function cetakTabel(n) {
    if (typeof n !== "number") {
        console.log("parameter harus bertipe data nomor dan harus positif");
    }

    if (n < 1) {
        console.log("parameter harus bertipe data nomor dan harus positif");
    }

    for (let i = 1; i <= 10; i++) {
        console.log(`${n} X ${i} = ${n * i}`);
    }
}

module.exports = cetakTabel;
