const buatRentang = (start,end) => {
    if (typeof start !== "number" || typeof end !== "number") return console.log("data should be number");
    for (let i=start; i<=end; i++) {
        console.log(i);
    } 
};

module.exports = {
    buatRentang,
};
