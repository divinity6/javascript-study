"use strict"

debugger;

console.log(globalVar);

debugger;

console.log(globalLet);

debugger;

try {
  console.log(globalBlock);
} catch(e){
  console.log("globalBlock은 공유되지 않습니다.");
};

function showLocal(){
  var localVar = "var";
  let localLet = "let";
  {
    let blockLet = "block";
    debugger;
  };
};
showLocal();
