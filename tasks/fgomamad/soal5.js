function cetakTabel(n) {
    if (typeof n !== "number" || n <= 0) {
        console.log("Parameter harus bertipe data nomor dan harus nomor positif");
        return;
    }

    for (let i = 1; i <= 10; i++) {
        console.log(`${n} x ${i} = ${n * i}`);
    }
}

cetakTabel("abc");
cetakTabel(-1);
cetakTabel(3);

module.exports = cetakTabel;
