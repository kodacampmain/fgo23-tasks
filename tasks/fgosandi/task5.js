const cetakTebal = (n) => {
  if (typeof n !== 'number' || n < 1) {
    console.log('Parameter harus bertipe data nomor dan harus nomor positif')
  }

  for (let i = 1; i <= 10; i++) {
    console.log(`${n} X ${i} = ${n * i}`)
  }
}

cetakTebal(3)

module.exports = cetakTebal
