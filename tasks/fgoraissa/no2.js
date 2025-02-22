const countArray = (arrNum) => {
    if (!(arrNum instanceof Array)) return console.log("data should in array type");
    for (const num of arrNum) {
        if (typeof num !== "number") return console.log("data should be array of number"); 
    }
    const result = arrNum.reduce((num, length) => num * length, 1);
    console.log(result);
    return;
};

module.exports = {
    countArray,
};
