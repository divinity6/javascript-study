
debugger;

//첫 번째 파라미터는 필수
try {
  const obj = Object.assign(null, {});
} catch (e) {
  console.log("null 작성 불가");
};
