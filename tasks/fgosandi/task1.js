const triangle = (inputData) => {
  if (typeof inputData !== 'number' || inputData < 1) {
    console.log('Parameter harus bertipe data nomor dan harus nomor positif')
  }

  let result = ''

  for (let i = 1; i <= inputData; i++) {
    for (let j = 1; j <= i; j++) {
      result += j
    }
    result += '\n'
  }
  console.log(result)
}

triangle(5)

module.exports = triangle
