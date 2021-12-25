
debugger;

//데이터 디스크립터
const obj = {music: "음악"};
const des = Object.getOwnPropertyDescriptors(obj);
for (let name in des.music){
  console.log(name + ": " + des.music[name]);
};
