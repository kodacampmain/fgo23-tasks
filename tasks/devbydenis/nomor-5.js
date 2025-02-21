function cetakTabel(n) {
    if (typeof n !== "number") return "input harus number";
    if (n < 1) return "input harus bilangan positif";

    let result = "";
    for (let i = 1; i <= 10; i++) {
        // result = `${n} x ${i + 1} = ${result}`;
        result += n + " x " + (i + 1) + " = " + (n * i) + "\n";
    }

    return result;
}

// console.log(cetakTabel("abc"))
// console.log(cetakTabel(-1))
// console.log(cetakTabel(3));

module.exports = cetakTabel;
