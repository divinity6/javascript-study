
debugger;

//ES5 setter 형태
var book = {title: "HTML"};
Object.defineProperty(book, "change", {
  set: function(param){
    this.title = param;
  }
});
book.change = "자바스크립트";
console.log(book);
