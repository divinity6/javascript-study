
debugger;

//set()
let obj = new Map();
obj.set("one", 100);
obj.set({}, "오브젝트");
obj.set(function(){}, "Function");
obj.set(new Number("100"), "인스턴스");
obj.set(NaN, "Not a Number");

for (let [key, value] of obj) {
  console.log(`${key} : ${value}`);
};
