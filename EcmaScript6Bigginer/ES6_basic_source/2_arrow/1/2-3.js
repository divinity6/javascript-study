
debugger;

//{key:value} 반환
const point = (param) => ({book: param});
const result = point("책");
for (const key in result){
  console.log(key + ": " + result[key]);
};
