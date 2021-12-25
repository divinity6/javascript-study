
debugger;

//Object 구조에 맞추어 값 할당
const {one, plus: {two, three}} = {one:10, plus:{two:20, three:30}};
console.log(one);
console.log(two);
console.log(three);
// console.log(plus)
