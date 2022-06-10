const input = require("fs").readFileSync("./test.txt").toString().split("\n");
let numbers = input[1].split(" ").map((x) => Number(x));
let min = Math.min(...numbers);
let max = Math.max(...numbers);

console.log(`${min} ${max}`);
