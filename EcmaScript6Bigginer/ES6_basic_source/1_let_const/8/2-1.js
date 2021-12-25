
debugger;

const book = {title: "책"};
try {
  book = {title: "음악 책"};
} catch (e) {
  console.log("const 전체 할당 불가");
};
book.title = "미술 책";
console.log(book.title);
