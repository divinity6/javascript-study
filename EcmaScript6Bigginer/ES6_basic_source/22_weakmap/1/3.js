
debugger;

//WeakMap() 인스턴스 생성
const empty = new WeakMap();

const sports = {};
const obj = new WeakMap([
  [sports, "sports 오브젝트"]
]);
console.log(typeof obj);
