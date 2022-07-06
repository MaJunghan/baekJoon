let input = require("fs").readFileSync("./test.txt").toString().split(" ");

console.log(parseInt(input[0]) * parseInt(input[1]));
