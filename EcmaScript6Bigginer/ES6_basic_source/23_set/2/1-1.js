
debugger;

//add()
let obj = new Set();
obj.add("축구").add("농구");
obj.add("축구");
for (let value of obj) {
  console.log(value);
};
