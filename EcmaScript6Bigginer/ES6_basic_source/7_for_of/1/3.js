
debugger;

//열거 가능한 프로퍼티가 대상
const obj = {};
Object.defineProperties(obj, {
  sports: {
    enumerable: false, value: "스포츠"
  },
  book: {
    enumerable: true, value: "책"
  },
});
for (let item in obj){
  console.log(item + ": " + obj[item]);
};

