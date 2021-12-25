
debugger;

const point = "\u{3131}\u{314F}";
console.log(point.normalize("NFC"));
console.log(point.normalize("NFD"));

console.log(point.normalize("NFKD"));
console.log(point.normalize("NFKC"));
