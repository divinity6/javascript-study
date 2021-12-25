
debugger;


//value가 바뀜
let obj = new Map();
const book = {};
obj.set(book, "첫 번째");
obj.set(book, "두 번째");
for (let [key, value] of obj) {
  console.log(`${key} : ${value}`);
};
