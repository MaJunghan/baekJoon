let input = Number(require("fs").readFileSync("./test.txt").toString());

let answer = "";

for (let i = input; i >= 1; i--) {
  answer += i + "\n";
}

console.log(answer);
