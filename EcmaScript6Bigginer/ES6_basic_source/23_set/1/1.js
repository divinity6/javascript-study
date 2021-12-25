
debugger;

//Set 오브젝트
const obj = new Set([
  1, 2, "ABC"
]);
console.log(`size: ${obj.size}`);

for (let value of obj){
  console.log(value);
};
