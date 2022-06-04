let input = require("fs").readFileSync("./test.txt").toString();

for (let i = 0; i < input.length; i += 10) {
  console.log(input.slice(i, i + 10));
}
