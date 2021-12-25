
debugger;

//Symbol.species 기능
class Sports extends Array {};
const obj = new Sports(10, 20, 30);
const one = obj.slice(1, 2);
console.log(one);
