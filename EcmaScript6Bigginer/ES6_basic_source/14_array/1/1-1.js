
debugger;

//Array 오브젝트로 변환, 반환
const like = {0:"zero", 1:"one", length:2};
const list = Array.from(like);
console.log(list);
console.log(Array.from("ABC"));
