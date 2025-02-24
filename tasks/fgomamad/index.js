const createTriangle = require("./soal1.js");
const countArray = require("./soal2");
const triangle1 = require("./soal3");
const processNumbers = require("./soal4");
const cetakTabel = require("./soal5");
const buatRentang = require("./soal6");


createTriangle(3);

function outputTask(){
    createTriangle("abc");
    createTriangle(-1);
    createTriangle(1);
    createTriangle(2);
    createTriangle(5);
    
    countArray([1, 2, 3, 4, 5]);
    countArray([2, 2, 2, 2, 2]);
    
    triangle1("abc");
    triangle1(-1);
    triangle1(1);
    triangle1(2);
    triangle1(5);
    
    processNumbers([1, 2, 3, 4, 5]);
    processNumbers([2, 4, 6, 8]);
    
    cetakTabel("abc");
    cetakTabel(-1);
    cetakTabel(3);
    
    buatRentang(1, 5);
    buatRentang(5, 10);
    
}

module.exports = { outputTask };
