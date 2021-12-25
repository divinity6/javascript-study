
debugger;

//Object 구조에 맞추어 할당
function add({one, plus: {two}}){
  console.log(one + two);
};
add({one: 10, plus: {two: 20}});
