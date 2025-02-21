export function cetakTabel(input) {
  if (typeof input !== "number" || input < 0)
    return console.log(
      "Parameter harus bertipe data nomor dan harus nomor positif"
    );
  for (let i = 1; i <= 10; i++) {
    console.log(`${input} x ${i} = ${input * i}`);
  }
}
