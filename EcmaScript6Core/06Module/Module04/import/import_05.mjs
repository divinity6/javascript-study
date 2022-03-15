/**
 * 프로그람 설명문서 주석
 * 2022.03. 15 수업
 *
 */
console.log("=====================================");
"use strict"
// console.log 사용
console.log('------------ *로 export 전체를 import ---------------');
debugger;

import * as all from "../export/export_05.mjs";

console.log( all.point );
// :: 123;
console.log( all.getPoint("code") );
// :: code123
debugger;

// 1. import * as all from "./export.mjs";
//    export 로 작성된 것을 모두 import 한다

// 2. as all 에서 all 이 Object 이름이 된다
//    all = { point : 값, getPoint : 함수 }
//    형태가 되므로 all.point 로 값을 구할 수 있다

// 3. 전체를 한 번에 import 하므로 편리하지만
//    사용하지 않는 것도 import 된다

/**
 *  - all 이 Module 오브젝트가 된다!
 */