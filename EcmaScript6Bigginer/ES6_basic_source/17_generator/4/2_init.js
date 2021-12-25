{
  "use strict"
  debugger;

  const sports = function* (param){
    const one = param + 10;
    yield one;
    var two = 2;
    yield one + two;
  };
  const obj = sports(10);

  debugger;

  console.log(obj.next());

  debugger;

  console.log(obj.next());

  debugger;

  debugger;
};