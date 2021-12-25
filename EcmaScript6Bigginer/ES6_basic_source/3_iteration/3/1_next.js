{
  "use strict"
  debugger;

  const list = [1, 2];

  debugger;

  const obj = list[Symbol.iterator]();

  console.log(obj.next());

  console.log(obj.next());

  console.log(obj.next());
  debugger;
};

