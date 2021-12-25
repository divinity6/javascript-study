
debugger;

//파라미터 값이 undefined일 때
const point = () => 20;
const add = (one, two = point()) => one + two;
const result = add(10, undefined);
console.log(result);
