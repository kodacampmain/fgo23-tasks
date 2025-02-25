const number = (angka) => {
    let arr = angka.filter((item) => item % 2 !== 0);
    // console.log(arr);
     const hasil = arr.reduce((acu, item) => acu * item, 1);
     console.log(hasil);

    
    
};
// number([1, 2, 3, 4, 5]);


module.exports = number;
