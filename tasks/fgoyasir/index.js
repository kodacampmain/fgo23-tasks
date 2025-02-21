const triangle = require("./1_triangle");
const countArray = require("./2_countArray");
const triangleRev = require("./3_triangleReverse");
const processNumber = require("./4_processNumber");
const printTable = require("./5_printTable");
const makeRange = require("./6_makeRange");

function yasirCall() {
    console.log(triangle(5));
    console.log(countArray([1, 2, 3, 4, 5]));
    console.log(triangleRev(5));
    console.log(processNumber([1, 2, 3, 4, 5]));
    printTable(3);
    console.log(makeRange(1, 5));
}

module.exports = {
    triangle,
    countArray,
    triangleRev,
    processNumber,
    printTable,
    makeRange,
    yasirCall
};
