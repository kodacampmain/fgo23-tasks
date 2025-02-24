function countArray4(inputArray) {
  const oddNumbers = inputArray.filter((input) => input % 2 === 1);
  if (oddNumbers.length === 0) return console.log(1);
  return console.log(oddNumbers.reduce((a, b) => a * b));
}

module.exports = { countArray4 };