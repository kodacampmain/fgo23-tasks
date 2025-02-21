const buatRentang = (mulai, selesai) => {
    const result = [];
    for (let i = mulai; i <= selesai; i++) {
        result.push(i);
    }
    console.log(result);
};

buatRentang(1, 5);
buatRentang(5, 10);

module.exports = buatRentang;
