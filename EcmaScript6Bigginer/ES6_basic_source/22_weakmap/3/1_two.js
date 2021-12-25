{
  "use strict"
  debugger;

  let obj = new WeakMap();
  let sports = () => {point: 1};
  obj.set(sports, "변경전");
  debugger;

  sports = () => {point: 2};
  obj.set(sports, "변경후");
  debugger;

  setTimeout(function(){
    debugger;
    console.log(obj.get(sports));
  }, 2000);
  debugger;

};
