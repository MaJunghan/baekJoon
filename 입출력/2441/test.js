let input = require("fs").readFileSync("./test.txt").toString();
let sum = "";
let blank = "";

for (let i = Number(input); i >= 1; i--) {
  sum += "*".repeat(i);
  for (let j = 0; j < input - i; j++) {
    blank += " ";
  }
  console.log(blank + sum);
  sum = "";
  blank = "";
}
