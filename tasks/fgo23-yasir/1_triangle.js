function triangle(n) {
    let str = "";
    for (let i=1; i <= n; i++) {
        for (let j=1; j <= i; j++) {
            str += i;
        }
        str += "\n";
    }
    return str;
}

module.exports = triangle;
