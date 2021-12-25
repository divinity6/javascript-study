
debugger;

//for-in 문
const obj = {
  [Symbol("100")]: 100,
  two: 200
};
for (let key in obj){
  console.log(key);
};
