export function countArrayOddOdd(arr) {
  const num = arr.filter((item) => item % 2 === 1);
  if (num.length === 0) return console.log(1);
  return console.log(num.reduce((acc, curr) => acc * curr));
}
