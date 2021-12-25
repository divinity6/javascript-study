
debugger;

//JSON.stringify()
const sym = Symbol("JSON");
const result = JSON.stringify({[sym]: "ABC"});
console.log(result);
