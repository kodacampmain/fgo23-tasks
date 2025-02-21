const cetakTabel = (n) => {
  if (typeof n !== "number" || n <= 0) {
    return console.log(
      "Parameter harus bertipe data nomor dan harus nomor positif"
    );
  }
  let result = 0;
  for (let i = 0; i < 10; i++) {
    result = n * (i + 1);
    console.log(`${n} x ${i + 1} = ${result}`);
  }
};

// cetakTabel(-1);
// cetakTabel("abc");
// cetakTabel(3);

module.exports = cetakTabel;
