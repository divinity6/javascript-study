
debugger;

//콜백 함수 호출
const like = {0:"zero", 1:"one", length:2};
console.log(Array.from(like, value => {
  return value + "변경";
}));
