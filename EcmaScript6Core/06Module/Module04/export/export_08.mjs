
console.log('------------ 함수 이름을 작성하지 않은 형태 ---------------');
// export.mjs
export default function( param ){
    debugger;
    return param + 100;
};

// 1. export default function( param ){ ... }
//    함수 이름을 작성하지 않았다