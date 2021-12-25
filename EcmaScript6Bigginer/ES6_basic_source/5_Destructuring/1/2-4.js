
debugger;

//배열 차원에 맞추어 분할 할당
let one, two, three, four;
[one, two, [three, four]] = [1, 2, [3, 4]];
console.log([one, two, three, four]);
