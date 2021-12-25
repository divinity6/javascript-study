
debugger;

//활용 형태
const check = (data) => {
  if (Object.is(typeof data, "object")){
    console.log(data);
  } else {
    console.log("object 타입이 아님");
  };
};
check({value: 10});
check(200);
