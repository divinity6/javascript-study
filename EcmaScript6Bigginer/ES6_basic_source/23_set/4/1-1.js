
debugger;

//forEach()
const obj = new Set([
  "one", () => {}
]);
function callback(value, key, set){
  console.log(value);
};
obj.forEach(callback);
