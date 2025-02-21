function countArray(arr) {
  if (!Array.isArray(arr) || arr.some((num) => typeof num !== "number")) {
    console.log("Parameter harus berupa array of integer");
    return;
  }

  let result = arr.reduce((acc, num) => acc * num, 1);
  console.log(result);
}

countArray([1, 2, 3, 4, 5]);
countArray([2, 2, 2, 2, 2]);

module.exports = {countArray};
