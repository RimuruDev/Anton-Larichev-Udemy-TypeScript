"use strict";
let Addition = (num1, num2) => {
    return num1 + num2;
};
let Multiplication = (x, y) => {
    return x * y;
};
let Subtraction = (x, y) => {
    return x - y;
};
let Division = (x, y) => {
    if (x == 0 || y == 0)
        return 0;
    return x / y;
};
console.log(`Addition(5, 5) => ${Addition(5, 5)}`);
console.log(`Multiplication(5, 5) => ${Multiplication(5, 5)}`);
console.log(`Subtraction(5, 5) => ${Subtraction(5, 5)}`);
console.log(`Division(5, 5) => ${Division(5, 5)}`);
