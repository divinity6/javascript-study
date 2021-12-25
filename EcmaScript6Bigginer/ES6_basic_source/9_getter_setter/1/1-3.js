
debugger;

//다수의 getter 사용
const book = {
  get getPoint(){
    return "포인트";
  },
  get getTitle(){
    return "제목";
  }
};
console.log(book.getPoint);
console.log(book.getTitle);
