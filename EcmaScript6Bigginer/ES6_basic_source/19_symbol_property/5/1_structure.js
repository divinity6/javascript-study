
debugger;

class Sports extends Array {
  static get [Symbol.species](){
    return Array;
  }
};
const one = new Sports(10, 20, 30);
console.log(one instanceof Sports);

const two = one.slice(1, 2);
console.log(two instanceof Array);
console.log(two instanceof Sports);
