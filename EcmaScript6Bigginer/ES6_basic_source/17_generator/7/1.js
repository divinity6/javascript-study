
debugger;

//return()
function* sports(count){
  while(true){
    yield ++count;
  };
};
const obj = sports(10);
console.log(obj.next());
console.log(obj.return(70));
console.log(obj.next(50));
