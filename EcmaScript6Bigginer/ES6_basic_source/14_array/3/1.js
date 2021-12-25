
debugger;

//generic: Array-like
const like = {0: 10, 1: 20, 2: 30, length: 3};
console.log(Array.prototype.copyWithin.call(like, 1, 0));
