
debugger;

// 빈 엘리먼트 삭제
const list = [1, 2, , , , [3, 4]];
console.log(list.length);
const change = list.flat();
console.log(change);
console.log(change.length);
