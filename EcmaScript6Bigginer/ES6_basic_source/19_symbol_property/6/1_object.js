
debugger;

//Object에 대응
const obj = {
  [Symbol.toPrimitive](hint){
    return hint === "number" ? 30 :
      hint === "string" ? "책" : "default";
  }
};
console.log(20 * obj);
console.log(`${obj}` + 100);
console.log(obj + 50);
console.log("default" == obj);
