
debugger;

const obj = new Map([
  ["one", 100],
  [{}, "오브젝트"]
]);
console.log(obj.delete("one"));
console.log(obj.delete({}));

const sports = {};
obj.set(sports, "스포츠");
console.log(obj.delete(sports));
