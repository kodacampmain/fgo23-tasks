const buatRentang = (numsStart, numsLeft) => {
    if (typeof numsStart !== "number" && typeof numsLeft !== "number") {
        return console.log(
            "Parameter harus bertipe data nomor dan harus nomor positif"
        );
    }

    for (let i = numsStart; i <= numsLeft; i++) {
        console.log(i);
    }
};

// buatRentang(1, 5);
// buatRentang(5, 10);

module.exports = buatRentang;
