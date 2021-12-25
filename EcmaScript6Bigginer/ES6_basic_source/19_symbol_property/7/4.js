
debugger;

//Object 이터레이션
const obj = {
  [Symbol.iterator](){
    return {
      count: 0,
      maxCount: this.maxCount,
      next(){
        if (this.count < this.maxCount){
          return {value: this.count++, done: false};
        };
        return {value: undefined, done: true};
      }
    };
  }
};
obj.maxCount = 2;
for (const value of obj){
  console.log(value);
};
