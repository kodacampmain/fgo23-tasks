function buatRentang(mulai, selesai) {
  let rentangData = [];
  for (let i = mulai; i <= selesai; i++) {
    rentangData.push(i);
  }
  return console.log(rentangData.join(", "));
}

module.exports = { buatRentang };