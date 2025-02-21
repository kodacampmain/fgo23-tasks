function buatRentang (mulai, selesai) {
    let arr = [];
    for (let i = mulai; i <= selesai; i++) {
        arr.push(i);
    }
    return arr.join();
}

module.exports = buatRentang;
