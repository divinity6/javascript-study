
debugger;


//악세스 디스크립터
const obj = {
  get music(){}
};
const des = Object.getOwnPropertyDescriptors(obj);
for (let name in des.music){
  console.log(name + ": " + des.music[name]);
};
