function triangle1(n) {
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

triangle1("abc");
triangle1(-1);
triangle1(1);
triangle1(2);
triangle1(5);

module.exports = {triangle1};
