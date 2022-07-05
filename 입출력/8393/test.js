const input = Number(require("fs").readFileSync("./test.txt").toString());
sum = 0;

for (let i = 1; i <= input; i++) {
  sum += i;
}

console.log(sum);
