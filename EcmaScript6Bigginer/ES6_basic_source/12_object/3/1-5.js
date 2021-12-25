
debugger;

//Deep Copy, Deep Clone
const book = {
  item: {title: "자바스크립트"}
};
const copy = JSON.parse(JSON.stringify(book));
book.item.title = "책";
console.log(copy.item.title);
