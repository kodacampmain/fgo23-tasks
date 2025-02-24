const triangle3 = (num) => {
    if (typeof num !== "number" || num <= 0) {
        return console.log(
            "Parameter harus bertipe data nomor dan harus nomor positif"
        );
    }
    for (let i = 1; i <= num; i++) {
        let row = "";
        for (let j = 1; j <= i; j++) {
            row += j;
        }
        let arr = [...row];
        arr.reverse();
        arr = arr.join("");
        console.log(arr);
    }
};

module.exports = triangle3;
