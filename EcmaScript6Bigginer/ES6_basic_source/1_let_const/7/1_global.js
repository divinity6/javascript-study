  "use strict"
  debugger;

  console.log(globalVar);
  debugger;

  var globalVar = "var 변수";
  debugger;

  try {
    console.log(globalLet);
  } catch(e) {
    console.log("globalLet 인식하지 못함");
  };

  let globalLet;
  debugger;

  console.log(globalLet);
  debugger;
