export function buatRentang(mulai, selesai) {
  let result = [];
  for (let i = mulai; i <= selesai; i++) {
    result.push(i);
  }
  return result.join(", ");
}
