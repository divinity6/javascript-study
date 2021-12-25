
debugger;

//Array 이터레이터 오브젝트 전개
const iterator = ["A", "B"].entries();
for (const property of iterator) {
  console.log(property);
};
