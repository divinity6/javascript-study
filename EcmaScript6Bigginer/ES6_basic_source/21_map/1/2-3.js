
debugger;

//값이 대체됨
const obj = new Map([
  [100, "첫 번째"],
  [100, "두 번째"]
]);
for (let [key, value] of obj) {
  console.log(`${key} : ${value}`);
};
