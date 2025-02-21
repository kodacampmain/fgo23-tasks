const cetakTabel = (num) => {
    if (typeof num !== "number" || num <= 0) return console.log("data should be a positive number");
    for (let i=1; i<=10; i++) {
        const result = num * i;
        console.log(`${num} x ${i} = ${result}`);
    } 
};

module.exports = {
    cetakTabel,
};
