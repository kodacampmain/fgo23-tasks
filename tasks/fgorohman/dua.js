const hasilPerkalian = (arr) => {
    const hasil = arr.reduce((akumulator, arus) => akumulator * arus, 1); // 24
    console.log(hasil);
};

// hasilPerkalian([1, 2, 3, 4, 5]);
// hasilPerkalian([2, 2, 2, 2, 2]);

module.exports = hasilPerkalian;
