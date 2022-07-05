let input = require("fs").readFileSync("./test.txt").toString().split("\n");
let sum = 0;

for (let x of input[1]) {
  sum += Number(x);
}

console.log(sum);
