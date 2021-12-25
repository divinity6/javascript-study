{
  "use strict"
  debugger;

  const list = ["A", "B"];
  const iterator = list.entries();
  const result = iterator.next();

  console.log(result);
  debugger;

  console.log(iterator.next().value);

  debugger;
};