const buatRentang = (start,end) => {
    if (typeof start !== "number" || typeof end !== "number") return console.log("data should be number");
    let range = [];
    for (let i=start; i<=end; i++) {
        range.push(i);
    }
    console.log(range.join(","));
    return;
};

module.exports = {
    buatRentang,
};
