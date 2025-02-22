const {triangle} = require ("./no1");
const {countArray} = require ("./no2");
const {segitiga} = require ("./no3");
const {processNumbers} = require ("./no4");
const {cetakTabel} = require ("./no5");
const {buatRentang} = require ("./no6");

const compileMinitask = (num,arrNum,start,end) => {
    triangle(num);
    countArray(arrNum);
    segitiga(num);
    processNumbers(arrNum);
    cetakTabel(num);
    buatRentang(start, end);
};

module.exports = {
    compileMinitask,
};
