
debugger;

//문자열로 인식
try {
  "/book/".startsWith(/book/);
} catch {
  console.log("정규 표현식으로 처리");
};

let check = /book/;
check[Symbol.match] = false;
console.log("/book/".startsWith(check));
