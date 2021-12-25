{
  "use strict"
  debugger;

  let mapObj = new Map();
  (function(){
    const obj = {key: "value"};
    mapObj.set(obj, "Map");
  }());
  debugger;

  let weakObj = new WeakMap();
  (function(){
    const obj = {key: "value"};
    weakObj.set(obj, "WeakMap");
  }());
  debugger;

  setTimeout(function(){
    debugger;
    console.log(weakObj);
    console.log(mapObj);
  }, 1000);
  debugger;
};