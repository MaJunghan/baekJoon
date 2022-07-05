let input = Number(require("fs").readFileSync("./test.txt"));

for (let i = 1; i < 10; i++) {
  console.log(`${input} * ${i} = ${input * i}`);
}
