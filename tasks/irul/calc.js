exports.sumNumbers = function (num1, num2){
    console.log("\n---- Sum Number Program ----");
    if( 
        isNaN(num1) ||
        isNaN(num2) ||
        typeof num1 == "string" ||
        typeof num2 == "string"
    ){
        throw new Error("parameter must be a number!");
    }
    return num1+num2;
};

exports.multiplyNumbers = function (num1, num2){
    console.log("\n---- Multiply Number Program ----");
    if( 
        isNaN(num1) ||
    isNaN(num2) ||
        typeof num1 == "string" ||
        typeof num2 == "string"
    ){
        throw new Error("parameter must be a number!");
    }
    return num1*num2;
};
