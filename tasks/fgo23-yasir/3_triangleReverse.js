function triangleRev(n) {
    let str = "";
    for (let i=1; i <= 5; i++) {
        for (let j=i; j >= 1; j--) {
            str += j;
        }
        str += "\n";
    }
    return str;
}

module.exports = triangleRev;
