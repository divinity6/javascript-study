/**
 * 프로그람 설명문서 주석
 * 2022.03. 15 수업
 *
 */
console.log("=====================================");
"use strict"
// console.log 사용
console.log('------------ 함수 이름을 작성하지 않은 형태 ---------------');
debugger;

import getPoint from "../export/export_08.mjs";

console.log( getPoint("code") );
// :: code100
debugger;

// 2. import getPoint from "./export.mjs";
//    export default 로 선언된 함수를 import 하면서
//    함수 이름을 getPoint 로 정의한다

// 3. log( getPoint("code") );
//    export default 로 선언한 함수가 호출된다.