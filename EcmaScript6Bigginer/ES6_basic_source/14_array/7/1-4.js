
debugger;

//다시 반복 불가
const iterator = ["A", "B"].entries();
for (const [key, value] of iterator){
  console.log(`${key}: ${value}`);
};
for (const property of iterator){
  console.log("다시 전개");
};
console.log(iterator.next());
