
debugger;

//프로퍼티 이름을 별도로 작성
let one, two;
({one, two} = {one: 10, two: 20});
console.log(one);
console.log(two);
