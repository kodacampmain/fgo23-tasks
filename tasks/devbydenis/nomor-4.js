const processNumber = (arrNum) => {
  if (!(arrNum instanceof Array)) return "input should be array"

  let result = 1;

  for (let i = 0; i < arrNum.length; i++) {
    if (arrNum[i] % 2 !== 0) {
      // console.log(arrNum[i]);
      result *= arrNum[i];
    }
  }

  return result;
};

// console.log(processNumber([1, 2, 3, 4, 5]));
// console.log(processNumber([2, 4, 6, 8]));
// console.log(processNumber([1, 2, 4, 5, 6, 8, 9]));

module.exports = processNumber