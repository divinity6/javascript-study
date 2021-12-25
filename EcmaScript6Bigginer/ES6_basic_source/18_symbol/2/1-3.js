
debugger;

//Symbol 값으로 연산 불가
let sym = Symbol();
try {
  const add = sym + 5;
} catch(e){
  console.log("연산 불가");
};
