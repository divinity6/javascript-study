
debugger;

//참조 오브젝트 변경
let obj = new WeakMap();
let sports = () => {point: 1};
obj.set(sports, "변경전");

sports = () => {point: 2};
obj.set(sports, "변경후");
