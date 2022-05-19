let input = require("fs").readFileSync("./test.txt").toString().split("\n");

for (let i = 0; i < input.length - 1; i++) {
  let numbers = input[i].split(" ");

  console.log(Number(numbers[0]) + Number(numbers[1]));
}
