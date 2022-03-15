/**
 * 프로그람 설명문서 주석
 * 2022.03. 15 수업
 *
 */
console.log("=====================================");
"use strict"
// console.log 사용
console.log('------------ *로 default 를 import ---------------');

debugger;

import * as all from "../export/export_09.mjs";
console.log( all.default( "code") );
// :: code100
debugger;
// 1. import * as all from "../export/export_09.mjs";
//    export 의 default 가 all.default 에 설정된다

// 2. all.default("code")
//    getPoint() 함수가 호출된다
/**
 *  - all.default 로 default 인 getPoint 호출 가능
 */