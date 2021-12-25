
debugger;

//Template에 사용
const sym = Symbol("주석, 설명");
try {
  `${sym}`
} catch {
  console.log("`${sym} 불가`");
};
