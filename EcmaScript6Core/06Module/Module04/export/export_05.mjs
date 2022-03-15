
console.log('------------ as 로 export/import 이름 변경 ---------------');
// export.mjs
const point = 123;
function getPoint( id ){
    debugger;
    return id + point;
}

export { point, getPoint };