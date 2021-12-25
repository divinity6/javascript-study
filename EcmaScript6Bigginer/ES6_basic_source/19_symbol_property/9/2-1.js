
debugger;

//Symbol.match()
const sports = {
  base: "ball",
  [Symbol.match](value){
    return this.base.indexOf(value)
            < 0 ? "없음" : "있음";
  }
}
console.log("al".match(sports));
