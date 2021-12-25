
debugger;

const sports = {
  soccer: "축구",
  baseball: "야구"
};
const keyList = Object.keys(sports);

for (let key of keyList){
  console.log(key + ": " + sports[key]);
};
