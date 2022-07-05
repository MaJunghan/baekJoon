let input = Number(require("fs").readFileSync("./test.txt").toString());

for (let i = input; i >= 1; i--) {
  console.log("*".repeat(i));
}
