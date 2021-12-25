
debugger;

//그래도 연동되는 형태
const book = {
  item: {title: "자바스크립트"}
};
let copy = {};
Object.assign(copy, book);
copy.item.title = "책";
console.log(book.item.title);
