let input = require("fs").readFileSync("./test.txt").toString().split("\n");
let num1 = Number(input[0]);
let num2 = Number(input[1]);

let oneNum = num2 % 10;
let twoNum = Math.floor((num2 % 100) / 10);
let threeNum = Math.floor(num2 / 100);

console.log(num1 * oneNum);
console.log(num1 * twoNum);
console.log(num1 * threeNum);
console.log(num1 * num2);
