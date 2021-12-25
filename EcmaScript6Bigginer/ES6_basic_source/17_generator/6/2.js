
debugger;

//for-of 문에서 제너레이터 사용
function* sports(count){
  while (true){
    yield ++count;
  };
};
for (let point of sports(10)){
  console.log(point);
  if (point > 12){
    break;
  };
}
