function cetakTabel(n) {
  if (typeof n !== 'number') return "input harus number"
  if (n < 1) return "input harus bilangan positif"

  let result = 0
  for (let i = 0; i < 10; i++) {
    result = n * (i + 1)
    console.log(`${n} x ${i + 1} = ${result}`)
  }
  
}

// console.log(cetakTabel("abc"))
// console.log(cetakTabel(-1))
// console.log(cetakTabel(3))

module.exports = cetakTabel