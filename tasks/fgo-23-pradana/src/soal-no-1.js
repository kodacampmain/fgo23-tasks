function triangle(input) {
  if (typeof input !== "number" || input <= 0)
    return console.log(
      "Parameter harus bertipe data nomor dan harus nomor positif"
    );
  for (let i = 1; i <= input; i++) {
    let result = "";
    for (let j = 1; j <= i; j++) {
      result += j;
    }
    console.log(result);
  }
}

module.exports = { triangle };
