
debugger;

//값 연동
let list = ["A", "B"];
let iterator = list.values();
list[0] = "연동";
console.log(iterator.next());
console.log(iterator.next());
