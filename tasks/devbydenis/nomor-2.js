function countArray(arrInt) {
  let result = 1;

  for (let i = 0; i < arrInt.length; i++) {
    result = result * arrInt[i];
  }

  return result;
}

// console.log(countArray([1, 2, 3, 4, 5]));
// console.log(countArray([2, 2, 2, 2, 2]));

module.exports = countArray