
debugger;

let mapObj = new Map();
(function(){
  const obj = {key: "value"};
  mapObj.set(obj, "Map");
}());

let weakObj = new WeakMap();
(function(){
  const obj = {key: "value"};
  weakObj.set(obj, "WeakMap");
}());
