let input = require("fs").readFileSync("./test.txt").toString();
sum = "";
for (let i = 0; i < input; i++) {
  sum += "*";
  console.log(sum);
}
