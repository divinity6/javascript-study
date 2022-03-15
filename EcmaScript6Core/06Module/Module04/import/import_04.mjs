/**
 * 프로그람 설명문서 주석
 * 2022.03. 15 수업
 *
 *           ===== as , * =====
 *
 *      - as 로 export/import 이름 변경 가능
 *
 *      - * 로 export 전체를 import
 */
console.log("=====================================");
"use strict"
// console.log 사용
console.log('------------ export 를 리스트 형태로 작성 ---------------');
debugger;

import { asPoint as point , asGetPoint as getPoint } from "../export/export_04.mjs";

console.log( point );
// :: 123;
console.log( getPoint("code") );
// :: code123
debugger;

// 3. import { asPoint as point , ... }
//    import 할 변수, 함수 이름을 변경한다.

// 4. as 의 왼쪽에 export 이름을 작성하고
//    오른쪽에 변경할 이름을 작성한다
//    asPoint 이름이 point 로 변경된다

/**
 *  - getPoint 로 호출하면 asGetPoint 로 export 한 함수가 실행된다!
 */