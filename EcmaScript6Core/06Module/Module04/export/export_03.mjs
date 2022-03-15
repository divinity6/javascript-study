
console.log('------------ export 를 리스트 형태로 작성 ---------------');
// export.mjs
const point = 123;
function getPoint( id ){
    debugger;
    return id + point;
}

export { point , getPoint };
/**
 *  - 이렇게 일괄적으로 작성 가능
 */