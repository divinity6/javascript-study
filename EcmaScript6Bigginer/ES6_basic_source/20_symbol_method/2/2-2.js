
debugger;

//toString()과 차이
console.log(Symbol("book").toString());
console.log(Symbol("").toString());
console.log(Symbol().toString());

console.log(Symbol.for("book").description);
console.log(Symbol("book").description);
console.log(Symbol("").description);
console.log(Symbol().description);
