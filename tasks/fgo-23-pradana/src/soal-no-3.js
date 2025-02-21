export function triangle3(input) {
  if (typeof input !== "number")
    return console.log(
      "Parameter harus bertipe data nomor dan harus nomor positif!!!"
    );
  for (let i = 1; i <= input; i++) {
    let result = "";
    for (let j = i; j >= 1; j--) {
      result += j;
    }
    console.log(result);
  }
}
