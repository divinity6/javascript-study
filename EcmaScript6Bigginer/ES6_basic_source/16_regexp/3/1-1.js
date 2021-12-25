
debugger;

//U 플래그 사용
const obj = new RegExp("\u{31}\u{32}", "u");
console.log(obj.test("12"));
console.log(obj.unicode);
console.log(/\u{1f418}/u.test("🐘"));
