{
  "use strict"
  debugger;

  const obj = {0: 10, 1: 20, length: 2};

  debugger;

  Object.setPrototypeOf(obj, Array.prototype);

  debugger;

  const callback = (element, index, all) => console.log(element);
  obj.forEach(callback);

  debugger;

  // Object.prototype이 바뀌지 않습니다.
  const check = Object.prototype;

  debugger;
};
