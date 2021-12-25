
debugger;

//같은 값으로 간주
const value = Math.abs(0.1 + 0.2 - 0.3);
console.log(value < Number.EPSILON);
