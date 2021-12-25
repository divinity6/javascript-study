
debugger;

const value = "  123";
console.log(value.length);
console.log(value.trimStart().length);

const split = "a, b, c".split(",");
for (let value of split){
  console.log(`${value}, ${value.length}`);
  console.log(value.trimStart().length);
};
