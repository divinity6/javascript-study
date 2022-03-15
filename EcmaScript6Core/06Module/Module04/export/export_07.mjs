
console.log('------------ default 를 리스트 형태로 작성 ---------------');
// export.mjs
function getPoint( id ){
    debugger;
    return id + 100;
};
export { getPoint as default };

// 1. export { getPoint as default }
//    함수에 export default 를 작성하지 않고
//    별도로 export default 를 작성할 수 있다.