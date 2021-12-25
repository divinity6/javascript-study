
debugger;

//ES5 getter 형태
var book = {};
Object.defineProperty(book, "title", {
  get: function(){
    return "책";
  }
});
console.log(book.title);
