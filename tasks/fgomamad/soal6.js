export function buatRentang(mulai, selesai) {
  if (
    typeof mulai !== "number" ||
    typeof selesai !== "number" ||
    mulai > selesai
  ) {
    console.log("Parameter harus berupa angka yang valid");
    return;
  }

  let hasil = [];
  for (let i = mulai; i <= selesai; i++) {
    hasil.push(i);
  }
  console.log(hasil.join(", "));
}

buatRentang(1, 5);
buatRentang(5, 10);

module.exports = buatRentang;
