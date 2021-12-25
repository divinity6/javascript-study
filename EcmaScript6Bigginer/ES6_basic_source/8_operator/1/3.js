
debugger;

const sports = "스포츠";
try {
  sports = "축구";
} catch(error){
  console.log("(error) 작성")
};
// catch만 작성
try {
  sports = "축구";
} catch {
  console.log("(error) 생략")
};
