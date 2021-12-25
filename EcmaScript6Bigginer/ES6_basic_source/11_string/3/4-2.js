
debugger;

//시작 인덱스 작성
const target = "ABC";
console.log(target.includes("A", 1));

try {
  result = target.includes(/^A/);
} catch (e) {
  console.log("정규 표현식 사용 불가");
};
