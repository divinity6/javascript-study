
console.log('------------ as 로 export/import 이름 변경 ---------------');
// export.mjs
const point = 123;
function getPoint( id ){
    debugger;
    return id + point;
}

export { point as asPoint , getPoint as asGetPoint };
/**
 *  - 함수이름을 as 로 변경해서 export 가능
 */
// 1. export { point as asPoint , ... };
//    export 할 변수, 함수 이름을 변경한다

// 2. as의 왼쪽에 원래 이름을 작성하고, 오른쪽에 변경할 이름을 작성한다
//    point 이름이 asPoint 로 변경된다