
debugger;

const book = ["책"];
try {
  book = ["음악 책"];
} catch (e) {
  console.log("const 전체 할당 불가");
};
book[0] = "미술 책";
console.log(book[0]);
