
console.log('------------ 변수, 함수 export/import ---------------');
// export.mjs
export const point = 123;
export function getPoint( id ){
    debugger;
    return id + point;
};