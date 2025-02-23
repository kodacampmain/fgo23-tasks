const segitiga = (num) => {
    if (typeof num !== "number" || num <= 0) return console.log("data should be a positive number");
    for (let row=1; row<=num; row++) {
        let string = "";
        for (i=row; i>0; i--) {
            string += i;
        } 
        console.log(string);
    } 
    return;
};

module.exports = {
    segitiga,
};
