const countArray = (arr) => {
  if (!(arr instanceof Array)) return console.log('inputan harus berupa array')
  let total = 1
  for (let index = 0; index < arr.length; index++) {
    total *= arr[index]
  }
  console.log(total)
}

countArray([1, 2, 3, 4, 5])
countArray([2, 2, 2, 2, 2])
