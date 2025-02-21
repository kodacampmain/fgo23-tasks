const processNumbers = (arrNum) => {
    if (!(arrNum instanceof Array)) return console.log("data should in array type");
    for (const num of arrNum) {
        if (typeof num !== "number") return console.log("data should be array of number");
        if (num % 2 === 0) {
            console.log(1);
        } else {
            const result = arrNum.reduce((total, current) => total * current, 1);
            console.log(result);
        }
    }
};
    
module.exports = {
    processNumbers,
};
