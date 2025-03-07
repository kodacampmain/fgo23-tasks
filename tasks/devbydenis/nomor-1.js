const triangle = (number) => {
    if (number < 1) console.log("input should be positive number");
    if (typeof number !== "number") console.log("input should be an integer");

    let col = "";

    for (let i = 1; i <= number; i++) {
        let row = ""; 

        for (let j = 1; j <= i; j++) {
            row += j + " ";
        }

        col += row + "\n";
    }

    return col;
};

// triangle('satu')
// triangle(-1)
// console.log(triangle(1));
// console.log(triangle(2));
// console.log(triangle(5));
// //triangle(5)
// /*
//   1
//   1 2
//   1 2 3
//   1 2 3 4
//   1 2 3 4 5
// */

module.exports = triangle;
