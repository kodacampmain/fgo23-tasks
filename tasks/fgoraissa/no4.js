const processNumbers = (arrNum) => {
    if (!(arrNum instanceof Array)) return console.log("data should in array type");
    let result = 1;
    let oddNum = [];
    for (const num of arrNum) {
        if (typeof num !== "number") return console.log("data should be array of number");
        if (num % 2 !== 0) {
            oddNum.push(num);            
        }
    } 
    result = oddNum.reduce((num, amount) => num * amount, 1);
    console.log(result);
    return;
};

module.exports = {
    processNumbers,
};
