function triangle(n) {
  if (typeof n !== "number" || n <= 0) {
    return console.log(
      "Parameter harus bertipe data nomor dan harus nomor positif"
    );
  }
  for (let i = 1; i <= n; i++) {
    let result = "";
    for (let j = 1; j <= i; j++) {
      result += j;
    }
    console.log(result);
  }
}

triangle("abc");
triangle(-1);
triangle(1);
triangle(2);
triangle(5);

module.exports = {triangle};
