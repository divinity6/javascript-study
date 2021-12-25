
debugger;

//프로퍼티 단위로 복사
const book = {
  item: {title: "자바스크립트"}
};
let copy = {};
for (let key in book){
  let value = book[key];
  copy[key] = {};
  for (let name in value){
    copy[key][name] = value[name];
  };
};
book.item.title = "책";
console.log(copy.item.title);
