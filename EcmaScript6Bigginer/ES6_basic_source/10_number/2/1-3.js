
debugger;

//0 / 0 방지
console.log(0 / 0);
const value = 0 / (0 + Number.EPSILON);
console.log(value);
