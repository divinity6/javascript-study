
debugger;

//Symbol 타입 변경 불가
let sym = Symbol();
try {
  +sym;
} catch{
  console.log("값 타입 변경 불가");
};
