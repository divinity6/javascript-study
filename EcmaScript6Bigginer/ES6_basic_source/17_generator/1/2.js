
debugger;

//Generator function 형태
function* sports(one){
};
const book = function*(one){
};

const music = Object.getPrototypeOf(function* (){}).constructor;
const gen = new music();
