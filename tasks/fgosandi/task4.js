const processNumber = (arr) => {
  if (!(arr instanceof Array)) return console.log('inputan harus array')
  let result = 1

  for (let index = 0; index < arr.length; index++) {
    if (arr[index] % 2 === 1) result *= arr[index]
  }
  console.log(result)
}

processNumber([1, 2, 3, 4, 5])
