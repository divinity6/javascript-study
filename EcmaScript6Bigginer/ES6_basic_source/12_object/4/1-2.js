
debugger;

//작성한 순서가 바뀌는 경우
const obj = {10:"십", book:"책", 7:"칠"};
const list = Object.entries(obj);
for (let keyValue of list){
  console.log(keyValue);
};
