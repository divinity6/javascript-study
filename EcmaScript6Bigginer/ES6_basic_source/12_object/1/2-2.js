
debugger;

//NaN 비교
console.log((NaN === NaN));
console.log(Object.is(NaN, NaN));
console.log((NaN === 0 / 0));
console.log(Object.is(NaN, 0 / 0));
