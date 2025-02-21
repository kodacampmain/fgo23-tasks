const countArray = (num) => {
  if (!(num instanceof Array)) {
    return console.log("Parameter harus bertipe data array");
  }
  let result = 1;
  for (element of num) {
    result *= element;
  }
  return console.log(result);
};

// countArray([1, 2, 3, 4, 5]);
// countArray([2, 2, 2, 2, 2]);
// countArray(2);

module.exports = countArray;
