let input = require("fs").readFileSync("./test.txt").toString();
let sum = "";
let blank = "";

for (let i = 1; i <= input; i++) {
  sum += "*";
  for (let j = 0; j < input - i; j++) {
    blank += " ";
  }
  console.log(blank + sum);
  blank = "";
}
