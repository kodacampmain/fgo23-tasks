const triangleReverse = (inputData) => {
    if (typeof inputData !== "number" || inputData < 1) {
        console.log("Parameter harus bertipe data nomor dan harus nomor positif");
    }

    let result = "";

    for (let i = 1; i <= inputData; i++) {
        for (let j = i; j >= 1; j--) {
            //   result += j
            result += j;
        }
        result += "\n";
    }
    console.log(result);
};

triangleReverse(5);

module.exports = triangleReverse;
