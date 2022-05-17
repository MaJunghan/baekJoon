let fs = require("fs");

let input = fs.readFileSync("./test.txt").toString().split("\n");
console.log(+input[0] + +input[1]);
