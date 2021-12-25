
debugger;

//인덱스를 반영한 나머지 할당
let one, three, rest;
[one, , three, ...rest] = [1, 2, 3, 4, 5];
console.log(three);
console.log(rest);
