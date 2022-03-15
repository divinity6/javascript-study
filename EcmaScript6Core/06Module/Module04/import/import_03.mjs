/**
 * 프로그람 설명문서 주석
 * 2022.03. 15 수업
 */
console.log("=====================================");
"use strict"
// console.log 사용
console.log('------------ export 를 리스트 형태로 작성 ---------------');
debugger;

import { point , getPoint } from "../export/export_03.mjs";
console.log( point );
// :: 123
console.log( getPoint("code") );
// :: code123
debugger;

// 1. export { point , getPoint };
//    변수와 함수에 export 를 작성하지 않고
//    export 대상을 한 번에 작성한 형태