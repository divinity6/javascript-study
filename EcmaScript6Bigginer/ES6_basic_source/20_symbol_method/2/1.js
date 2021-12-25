
debugger;

console.log(Symbol("100").toString());
const sym = Symbol.for("book");
console.log(sym.toString());

try {
  console.log(Symbol() + "ABC");
} catch {
  console.log("+로 연결 불가");
};
