
debugger;

let result = [21, 22];
const five = [51, 52];
result.push(...five);
console.log(result);

result.push(..."abc");
console.log(result);
