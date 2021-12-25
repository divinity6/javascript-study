
debugger;

// 변숫값을 프로퍼티 이름으로 사용
const item = "world";
const sports = {
  [item]: 100,
  [item + " Cup"]: "월드컵",
  [item + "Sports"]: function(){
    return "스포츠";
  }
};
console.log(sports[item]);
console.log(sports[item + " Cup"]);
console.log(sports[item + "Sports"]());
