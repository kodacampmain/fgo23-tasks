export function prinstSegitiga(n) {
  if (typeof n !== "number") {
    console.log("Parameter harus bertipe");
  }
  if (n < 1) {
    console.log("parameter harus lebih dari 0");
  }

  for (let i = 1; i <= n; i++) {
    let result = "";
    for (let j = i; j >= 1; j--) {
      result += j;
    }
    console.log(result);
  }
}
