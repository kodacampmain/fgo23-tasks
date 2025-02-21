const buatRentang = (mulai, selesai) => {
    hasil = "";
    for (i = mulai; i <= selesai; i++) {
        hasil += i + ",";
    }
    console.log(hasil);
};

// buatRentang(2, 5);

module.exports = buatRentang;
