const triangle = (num) => {
  if (typeof num !== "number" || num <= 0) {
    console.log("Parameter harus bertipe data nomor dan harus nomor positif");
  }
  let result = "";
  for (let i = 1; i <= num; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += j;
    }
    console.log(row);
  }
};

module.exports = triangle;
