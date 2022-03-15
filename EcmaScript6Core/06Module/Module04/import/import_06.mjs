/**
 * 프로그람 설명문서 주석
 * 2022.03. 15 수업
 *
 *           ===== default =====
 *
 *      - 모듈에 export 가 하나만 있는 것을
 *        명시적으로 나타낼 때 사용
 *
 *      - default 를 리스트 형태로 작성
 *
 *      - 함수 이름을 작성하지 않은 형태
 *
 *      - * 로 default 를 import
 */
console.log("=====================================");
// console.log 사용
console.log('------------ default ---------------');
debugger;

import getPoint from "../export/export_06.mjs";

console.log( getPoint("code") );
// :: code100
debugger;

// 1. import getPoint from "./export.mjs";
//    default 로 선언하면 { getPoint } 에서
//    중괄호 {} 를 제외하고 getPoint 만 작성한다

// 2. 모듈 파일에 default 가 아닌 것을
//    같이 작성할 수 있지만
//    일반적으로 default 하나만 작성한다

// 3. 모듈 파일에 default 를 다수 작성하면 에러 발생
