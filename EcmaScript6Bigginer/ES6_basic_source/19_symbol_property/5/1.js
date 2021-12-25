
debugger;

//Symbol.species
class Sports extends Array {
  static get [Symbol.species](){
    return Array;
  }
};
const obj = new Sports(10, 20)
