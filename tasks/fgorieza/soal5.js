function cetakTabel(n) {
  if (typeof n !== "number" || n <= 0) {
    return "Parameter harus bertipe data nomor dan harus nomor positif";
  }

  let hasil = [];

  for (let i = 1; i <= 10; i++) {
    hasil.push(`${n} x ${i} = ${n * i}`);
  }

  return hasil.join("\n");
}

console.log(cetakTabel("abc"));
console.log(cetakTabel(-1));
console.log(cetakTabel(3));

module.exports = cetakTabel();
