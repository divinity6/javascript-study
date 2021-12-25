
debugger;

//잘못 작성한 형태
try {
  new Map(["one", 1]);
} catch {
  console.log("[[one, 1]]");
};
const obj = new Map([{five: 5}]);
for (let [key, value] of obj) {
  console.log(`${key} : ${value}`);
};
